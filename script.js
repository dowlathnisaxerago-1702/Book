
document.addEventListener('DOMContentLoaded',()=>{
let c=document.querySelectorAll('.counter');
c.forEach(el=>{let t=+el.dataset.target,n=0;let i=setInterval(()=>{n+=Math.ceil(t/50);if(n>=t){n=t;clearInterval(i)}el.textContent=n+'+'},40)});
});
