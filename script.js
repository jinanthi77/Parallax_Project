let text = document.getElementById('text');
let u = document.getElementById('u');
let u2 = document.getElementById('u2');
let u3 = document.getElementById('u3');

window.addEventListener('scroll',() => {
    let value = window.scrollY;


    text.style.marginTop = value * 0.5 + 'px';
    u2.style.left = value * 1.5 + 'px';
    u3.style.left = value * -1.5 + 'px';
    u.style.top = value * 0.5 + 'px';
});

