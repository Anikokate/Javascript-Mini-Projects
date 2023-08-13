const count = document.querySelector('span');
const container = document.querySelector('.container');
const image = document.querySelector('img');
const div = document.querySelector('#ht');

let c = 0;

image.addEventListener('dblclick', (e) => {
    c+=1;
    count.textContent = c;

    const heart = document.createElement('i');
    heart.classList.add('fa-solid');
    heart.classList.add('fa-heart');
    container.appendChild(heart);
    heart.classList.add('heart');
    heart.style.top = `${e.offsetY}px`;
    heart.style.left = `${e.offsetX}px`;
    heart.style.transform = ``

    setTimeout(()=>heart.remove(), 700);
})