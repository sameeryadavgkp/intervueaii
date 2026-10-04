API.getPerformance().then(r=>{$('#overall').textContent=r.overall;
$('#stats').innerHTML=r.stats.map(([k,v])=>`<div class="card stat"><strong>${v}</strong><span>${k}</span></div>`).join('');
$('#hist').innerHTML=r.history.map(h=>`<tr><td>${h[0]}</td><td>${h[1]}</td><td>${h[2]}</td><td>${h[3]}</td></tr>`).join('');
$('#skills').innerHTML=Object.entries(r.skills).map(([k,v])=>bar(k,v)).join('');
const t=r.trend,pts=t.map((v,i)=>`${20+i*(360/(t.length-1))},${130-(v-50)*2.4}`);
$('#graph').innerHTML=`<polyline fill="none" stroke="#1684ff" stroke-width="3" points="${pts.join(' ')}"/>`+pts.map(p=>`<circle cx="${p.split(',')[0]}" cy="${p.split(',')[1]}" r="4" fill="#1684ff"/>`).join('');
$('#act').innerHTML=ul(r.activity)});
API.getHeatmap().then(h=>{$('#heat').innerHTML=h.map(l=>`<i class="l${l}"></i>`).join('');$('#hcount').textContent=h.filter(Boolean).length+' active days in the last 26 weeks (sample data)'});
