function magic(){
    alert('Hello');
    let s = prompt('What is you name?');
    alert('Hello' + s);
}

function about(){
    alert('about'.repeat(10));
}

const d = document.getElementById('u');
const d1 = document.getElementById('dp');

d.addEventListener('click',magic);
d1.addEventListener('click',about);