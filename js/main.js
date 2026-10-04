const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const bar=(l,v)=>`<div class="bar"><div><span>${l}</span><span>${v}%</span></div><i><b style="width:${v}%"></b></i></div>`;
const chips=(a,c='')=>a.map(x=>`<span class="chip ${c}">${x}</span>`).join('');
const ul=a=>`<ul class="list">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
// Frontend-only auth validation
$$('form[data-auth]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));const er=[];
if(!/^\S+@\S+\.\S+$/.test(d.email||''))er.push('Enter a valid email.');
if((d.password||'').length<8)er.push('Password must be at least 8 characters.');
if(f.dataset.auth==='signup'&&d.password!==d.confirm)er.push('Passwords do not match.');
const m=$('.msg',f);if(er.length){m.className='msg err';m.innerHTML=er.join('<br>');return}
m.className='msg ok';m.textContent='Success! Redirecting…';setTimeout(()=>location.href='dashboard.html',900);}));
const setStep=n=>$$('#stepper li').forEach((l,i)=>l.className=i<n?'done':i===n?'on':'');
