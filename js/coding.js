let P=[],cur=null,lv='All';const starter='function solve(input) {\n  // write your solution\n}';
const draw=()=>{$('#plist').innerHTML=P.filter(p=>lv==='All'||p.level===lv).map(p=>`<button data-id="${p.id}" class="${cur&&cur.id===p.id?'on':''}"><span class="st ${p.status}"></span>${p.title}<span class="tag ${p.level}">${p.level}</span><small>${p.acc} acceptance · ${p.topics.join(", ")}</small></button>`).join('')};
const pick=p=>{cur=p;$('#ptitle').textContent=p.title;$('#pdesc').textContent=p.desc;$('#pex').textContent=p.ex;$('#ptags').innerHTML=chips(p.topics);$('#code').value=starter;$('#res').innerHTML='';draw()};
$('#plist').onclick=e=>{const b=e.target.closest('button');if(b)pick(P.find(p=>p.id==b.dataset.id))};
$('#filters').onclick=e=>{if(!e.target.dataset.l)return;lv=e.target.dataset.l;$$('#filters .btn').forEach(b=>{b.className='btn '+(b.dataset.l===lv?'btn-primary':'btn-ghost')});draw()};
const run=async sub=>{$('#res').innerHTML='Running…';const r=await API.runCode($('#code').value,sub);
$('#res').innerHTML=`<p class="${r.ok?'ok':'err'}">${r.ok?(sub?'Accepted':'All sample cases passed')+' · '+r.runtime:'Wrong answer'}</p>${ul(r.cases.map(c=>`${c[0]}: ${c[1]}`))}`};
$('#run').onclick=()=>run(false);$('#sub').onclick=()=>run(true);
API.getProblems().then(p=>{P=p;draw();pick(p[0])});

$('#lang').onchange=()=>$('#fn').textContent='solution.'+({JavaScript:'js',Python:'py',Java:'java','C++':'cpp'})[$('#lang').value];
