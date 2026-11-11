$ErrorActionPreference = 'Stop'
$rea   = 'D:\Project\rea.cmd'
$base  = 'D:\Project\sham-market\sham-market-clone\parity'
$app   = 'http://127.0.0.1:3100'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'

New-Item -ItemType Directory -Force "$base\evidence", "$base\shots" | Out-Null

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

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($wd in $widths) {
  foreach ($r in $routes) {
    $scenario = [ordered]@{
      browser     = [ordered]@{ mode = 'launch'; executable_path = $chrome }
      start_url   = [ordered]@{ url = "$app$($r.p)" }
      environment = [ordered]@{
        viewport        = [ordered]@{ width = $wd.w; height = $wd.h; device_scale_factor = 1 }
        locale          = 'ar-SY'
        service_workers = 'block'
      }
      actions     = @([ordered]@{ step_id = 'settle'; action = 'wait_for_timeout'; duration_ms = 1200 })
      capture     = [ordered]@{ at_end = @('screenshot', 'dom', 'accessibility', 'url') }
    }
    $sp = "$base\evidence\$($wd.n)-$($r.s).scenario.json"
    [IO.File]::WriteAllText($sp, ($scenario | ConvertTo-Json -Depth 8), $utf8NoBom)

    $cp = "$base\evidence\$($wd.n)-$($r.s).capture.json"
    $out = (& $rea capture-browser-scenario $sp --format json 2>$null) | Out-String
    [IO.File]::WriteAllText($cp, $out, $utf8NoBom)

    $cap = $out | ConvertFrom-Json
    if ($cap.evidence_id) { Write-Output "OK $($wd.n)-$($r.s) $($cap.evidence_id)" }
    else { Write-Output "FAIL $($wd.n)-$($r.s): $($cap.code) $($cap.message)" }
  }
}
