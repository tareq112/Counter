const cnt = document.querySelector('.count');
const inc = document.querySelector('.inc');
const rst = document.querySelector('.res');
const dec = document.querySelector('.dec');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', function (e) {
    

    if (e.target.className == 'btn res') {
        resetCounter();
    }
    else if (e.target.className == 'btn dec') {
        decReaseCounter();
    }
    else if (e.target.className == 'btn inc') {
        increementCounter();
    }
}))

function resetCounter() {
    
    cnt.textContent = '0';
}

function decReaseCounter() {
    
    let cntVal = cnt.textContent;
    cnt.textContent = --cntVal;
}
function increementCounter() {
    let cntVal = cnt.textContent;
    cnt.textContent = ++cntVal;
}