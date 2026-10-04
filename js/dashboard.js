API.getDashboard().then(d=>{const u=d.user;$('#pname').textContent=u.name;$('#phead').textContent=u.headline;$('#pav').textContent=u.initials;
$('#pstats').innerHTML=u.stats.map(([k,v])=>`<li><span>${k}</span><b>${v}</b></li>`).join('');
$('#stories').innerHTML=d.stories.map(([g,p,l,dn])=>`<a class="story ${dn?'done':''}" href="${p}.html"><span>${g}</span>${l}</a>`).join('');
$('#daily').innerHTML=`<p class="eyebrow">Daily challenge</p><h3 style="margin:6px 0">${d.daily.title} <span class="tag ${d.daily.level}">${d.daily.level}</span></h3><p>${chips(d.daily.topics)}</p><a class="btn btn-primary btn-sm" href="coding.html">Solve now</a>`;
$('#feed').innerHTML=d.feed.map(p=>`<article class="card post"><div class="post-h"><div class="avatar">${p.i}</div><div><b>${p.n}</b><br><small style="color:var(--muted)">${p.t} ago · sample post</small></div></div><p style="margin:12px 0">${p.x}</p><p>${chips(p.m)}</p><div class="acts"><button data-l="${p.l}">👍 Like · <span>${p.l}</span></button><button disabled>💬 ${p.c}</button></div></article>`).join('');
$('#feed').onclick=e=>{const b=e.target.closest('button[data-l]');if(!b)return;const on=b.classList.toggle('on');b.querySelector('span').textContent=+b.dataset.l+(on?1:0)};
$('#lb').innerHTML=d.board.map(([n,s],i)=>`<li><span>${i+1}. ${n}</span><b>${s}</b></li>`).join('')});
