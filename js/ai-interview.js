let qs=[],i=0;const f=$('#setup'),s=$('#session');
function show(){$('#qnum').textContent=`Question ${i+1} of ${qs.length}`;$('#q').textContent=qs[i];$('#ans').value='';$('#fb').hidden=true;$('#submit').hidden=false;$('#aerr').textContent='';setStep(1)}
f.onsubmit=async e=>{e.preventDefault();qs=await API.getQuestions(Object.fromEntries(new FormData(f)));i=0;f.hidden=true;s.hidden=false;show()};
$('#submit').onclick=async()=>{const a=$('#ans').value.trim();if(a.length<20){$('#aerr').textContent='Write at least 20 characters.';return}
$('#submit').hidden=true;const r=await API.evaluateAnswer(a);
$('#fb').innerHTML=`<h3>Mock feedback · demo scoring</h3><p class="score">${r.score}<small>/100</small></p>${bar('Communication',r.communication)}${bar('Technical',r.technical)}${bar('Confidence',r.confidence)}<h3>Improve</h3>${ul(r.tips)}<button class="btn btn-primary" id="next">${i<qs.length-1?'Next question':'Finish'}</button>`;
$('#fb').hidden=false;setStep(2);$('#next').onclick=()=>{if(++i<qs.length)show();else{s.hidden=true;f.hidden=false;i=0;setStep(0)}}};
