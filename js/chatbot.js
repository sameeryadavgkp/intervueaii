// Demo assistant: rule-based keyword matching, not a real AI model. Swap reply() for a fetch() call later.
(()=>{const R=document.body.dataset.root||'',P='pages/';
const lk=document.createElement('link');lk.rel='stylesheet';lk.href=R+'css/chatbot.css';document.head.appendChild(lk);
const url=p=>R+(p==='index'?'index':P+p)+'.html';
const K=[[/mock|timed/,'Mock Interviews run a timed round of 5 questions with a score breakdown and a downloadable report.','mock-interviews','Open Mock Interviews'],
[/resume|ats|cv|keyword/,'Upload a resume, paste a job description and get a sample ATS report with keyword gaps.','resume-ats','Open Resume/ATS'],
[/code|coding|problem|leetcode/,'Coding Practice has 7 problems with a code editor and mock test results.','coding','Open Coding'],
[/feedback|strength|weakness/,'Feedback shows communication, technical and confidence scores with recommendations.','feedback','Open Feedback'],
[/progress|performance|streak|history|heatmap/,'Performance tracks your history, skill breakdown and a practice heatmap.','performance','Open Performance'],
[/dashboard|profile|feed/,'Your dashboard shows your streak, daily challenge and activity feed.','dashboard','Open Dashboard'],
[/login|log in|sign|account|register/,'You can log in or create an account. Validation is frontend-only in this demo.','signup','Create account'],
[/home|landing|main page/,'Taking you to the home page.','index','Go to Home'],
[/interview|practice|question|start|prepare/,'AI Interview lets you pick a role and level, answer questions and see feedback.','ai-interview','Open AI Interview']];
const Q=['Start an interview','Check my resume','Coding practice','My progress'];
const el=document.createElement('div');el.className='cb-root';
el.innerHTML=`<button class="cb-fab" aria-label="Open assistant" aria-expanded="false"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg></button>
<section class="cb" role="dialog" aria-label="IntervueAI assistant" hidden><header><div class="cb-av">AI</div><div><b>IntervueAI Assistant</b><small>Demo · rule-based, not a real AI</small></div><button class="cb-x" aria-label="Close">×</button></header>
<div class="cb-msgs" aria-live="polite"></div><div class="cb-chips">${Q.map(q=>`<button>${q}</button>`).join('')}</div>
<form class="cb-form"><input placeholder="Ask about a feature…" aria-label="Message" autocomplete="off"><button class="btn btn-primary btn-sm">Send</button></form></section>`;
document.body.appendChild(el);
const $c=s=>el.querySelector(s),box=$c('.cb'),fab=$c('.cb-fab'),msgs=$c('.cb-msgs'),inp=$c('input');
const add=(t,me,html)=>{const m=document.createElement('div');m.className='m '+(me?'me':'bot');html?m.innerHTML=t:m.textContent=t;msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight};
const reply=q=>{const k=K.find(x=>x[0].test(q.toLowerCase()));
 return k?`${k[1]}<br><a class="cb-link" href="${url(k[2])}">${k[3]} →</a>`:`I can help you find: AI Interview, Mock Interviews, Resume/ATS, Coding, Feedback, Performance or your Dashboard. Try asking about one of them.<br><a class="cb-link" href="${url('index')}">Go to Home →</a>`};
const send=q=>{q=q.trim();if(!q)return;add(q,1);setTimeout(()=>add(reply(q),0,1),450)};
const toggle=o=>{box.hidden=!o;fab.setAttribute('aria-expanded',o);if(o){inp.focus()}};
fab.onclick=()=>toggle(box.hidden);$c('.cb-x').onclick=()=>toggle(false);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!box.hidden)toggle(false)});
$c('.cb-form').onsubmit=e=>{e.preventDefault();send(inp.value);inp.value=''};
$c('.cb-chips').onclick=e=>{if(e.target.tagName==='BUTTON')send(e.target.textContent)};
add('Hi! I can point you to the right tool. What would you like to do?');})();
