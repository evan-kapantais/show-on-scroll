let root = document.querySelector('.root');
let fixed = document.querySelector('.fixed');
window.addEventListener('scroll', show);

fixed.innerHTML = window.scrollY;

function show() {
  let par = document.querySelector('.par');

  par.innerHTML = window.scrollY;
}