const b = document.getElementById('b');
const d = document.getElementById('id');
function g(){
    for(let i=0; i < 10; i++){
        d.insertAdjacentText('beforeend','hjsahjkhdkjashdjkashdjk' + i);
    }
}
b.addEventListener('click',g) 