const button = document.querySelector('button');
const rippleCircle = document.querySelector('button .circle');

button.addEventListener('click', (e)=> {
    let x = `${e.offsetX}px`;
    let y = `${e.offsetY}px`;
    const rippleCircle = document.createElement('span');
    rippleCircle.classList.add('circle');
    rippleCircle.style.left = x;
    rippleCircle.style.top = y;
    button.appendChild(rippleCircle);

    setTimeout(()=>rippleCircle.remove(), 700);
})