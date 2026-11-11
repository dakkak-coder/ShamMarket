$ErrorActionPreference = 'Stop'
$rea   = 'D:\Project\rea.cmd'
$base  = 'D:\Project\sham-market\baseline'
$app   = 'http://127.0.0.1:3000'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'

$widths = @(
  @{ n = '1440'; w = 1440; h = 900 },
  @{ n = '768';  w = 768;  h = 1024 },
  @{ n = '390';  w = 390;  h = 844 }
)
$routes = @(
  @{ s = 'home';   p = '/' },
  @{ s = 'new';    p = '/new' },
  @{ s = 'my';     p = '/my' },
  @{ s = 'detail'; p = '/list/1' }
)

foreach ($wd in $widths) {
  foreach ($r in $routes) {
    $scenario = [ordered]@{
      browser     = [ordered]@{ mode = 'launch'; executable_path = $chrome }
      start_url   = [ordered]@{ url = "$app$($r.p)" }
      environment = [ordered]@{
        viewport          = [ordered]@{ width = $wd.w; height = $wd.h; device_scale_factor = 1 }
        locale            = 'ar-SY'
        service_workers   = 'block'
      }
      actions     = @([ordered]@{ step_id = 'settle'; action = 'wait_for_timeout'; duration_ms = 900 })
      capture     = [ordered]@{ at_end = @('screenshot', 'dom', 'accessibility', 'url') }
    }
    $sp = "$base\evidence\$($wd.n)-$($r.s).scenario.json"
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [IO.File]::WriteAllText($sp, ($scenario | ConvertTo-Json -Depth 8), $utf8NoBom)

    $cp = "$base\evidence\$($wd.n)-$($r.s).capture.json"
    $out = (& $rea capture-browser-scenario $sp --format json 2>$null) | Out-String
    [IO.File]::WriteAllText($cp, $out, $utf8NoBom)

    $cap = (Get-Content $cp -Raw) | ConvertFrom-Json
    if (-not $cap.evidence_id) { Write-Output "FAIL $($wd.n)-$($r.s): $($cap.code) $($cap.message)"; continue }

    $nr = $cap.normalized_result
    $shot = $null
    foreach ($k in @('screenshots', 'screenshot')) {
      if ($nr.PSObject.Properties.Name -contains $k -and $nr.$k) {
        $cand = $nr.$k
        if ($cand -is [array]) { $shot = $cand[0] } else { $shot = $cand }
        break
      }
    }
    if ($shot) {
      $b64 = if ($shot.data_base64) { $shot.data_base64 } elseif ($shot.artifact.data_base64) { $shot.artifact.data_base64 } else { $null }
      if ($b64) {
        [IO.File]::WriteAllBytes("$base\shots\$($wd.n)-$($r.s).png", [Convert]::FromBase64String($b64))
        Write-Output "OK $($wd.n)-$($r.s) $($shot.width)x$($shot.height) $($shot.bytes)b $($cap.evidence_id)"
      } else { Write-Output "NOSHOT $($wd.n)-$($r.s) keys=$($shot.PSObject.Properties.Name -join ',')" }
    } else {
      Write-Output "NOSHOT $($wd.n)-$($r.s) nrkeys=$($nr.PSObject.Properties.Name -join ',')"
    }
  }
}
