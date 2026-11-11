const fs=require('fs'),path=require('path');
const beforeDir="D:/Project/sham-market/baseline/evidence";
const afterDir="D:/Project/sham-market/sham-market-clone/parity/evidence";
const outDir=path.join("D:/Project/sham-market/sham-market-clone/parity","artifacts");
fs.mkdirSync(outDir,{recursive:true});
const pick=(file)=>{const j=JSON.parse(fs.readFileSync(file,'utf8'));const steps=j?.normalized_result?.steps||[];let a=null;for(const s of steps){const c=s?.artifacts?.screenshot;if(c?.state==='captured'&&c.value?.data_base64)a=c.value;}return a;};
const rows=[];
for(const w of ["1440","768","390"]) for(const r of ["home","new","my","detail"]){
  const b=pick(path.join(beforeDir,`${w}-${r}.capture.json`));
  const a=pick(path.join(afterDir,`${w}-${r}.capture.json`));
  if(!b||!a){rows.push([w,r,'MISSING',b?'':'before',a?'':'after']);continue;}
  fs.writeFileSync(path.join(outDir,`${w}-${r}-before.json`),JSON.stringify(b));
  fs.writeFileSync(path.join(outDir,`${w}-${r}-after.json`),JSON.stringify(a));
  fs.writeFileSync(path.join("D:/Project/sham-market/sham-market-clone/parity/shots",`${w}-${r}.png`),Buffer.from(a.data_base64,'base64'));
  rows.push([w,r,'ok',b.bytes,a.bytes]);
}
console.log(rows.map(x=>x.join(' ')).join('\n'));
