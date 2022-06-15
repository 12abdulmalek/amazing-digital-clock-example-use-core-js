setInterval(() => {
    
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');
let ss = document.getElementById('ss');
let lines = document.getElementById('l');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h > 12 ? "pm":"am";
if(h>12){
    h-=12;
}
 h = (h<10)?"0"+h:h;
 m = (m<10)?"0"+m:m;
 s = (s<10)?"0"+s:s;

hours.innerText = h;
minutes.innerText = m;
seconds.innerText = s;
ampm.innerText = am;


ss.style.strokeDashoffset =440-(440*s)/60;

}, 1000);

