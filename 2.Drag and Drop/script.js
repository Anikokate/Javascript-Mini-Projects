const bgImage = document.querySelector('.bg-img');
console.log(bgImage)
const boxes = document.querySelectorAll('.box');

for(const box of boxes){
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',dragDrop);
}


function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    console.log(this)
    this.className += ' hovered'
}
function dragLeave(){
    this.className = 'box'
}
function dragDrop(){
    this.className = 'box'
    this.append(bgImage)
}