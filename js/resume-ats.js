const fi=$('#file'),f=$('#ats');
fi.onchange=()=>$('#fname').textContent=fi.files[0]?fi.files[0].name:'Click to upload PDF or DOCX';
f.onsubmit=async e=>{e.preventDefault();const out=$('#out');out.hidden=false;
if(!fi.files[0]||$('#jd').value.trim().length<20){out.innerHTML='<p class="err">Upload a resume and paste a job description (20+ characters).</p>';return}
setStep(1);out.innerHTML='<p>Analysing…</p>';const r=await API.analyzeResume();setStep(2);
out.innerHTML=`<div style="display:flex;gap:20px;align-items:center"><div class="ring" style="--p:${r.score}%"><b>${r.score}</b></div><div><p class="eyebrow">ATS score · mock analysis</p><p class="lead" style="margin:0;font-size:1rem">Sample result, not computed from your file.</p></div></div><h3 style="margin-top:24px">Keywords found</h3><p>${chips(r.found)}</p><h3>Missing skills</h3><p>${chips(r.missing,'miss')}</p><h3>Resume improvements</h3>${ul(r.tips)}`};
