const textArea = document.getElementById('content');
const charactherCounter = document.getElementById('cCounter');
const wordCounter = document.getElementById('wCounter');

textArea.oninput =() =>{
    let characther = textArea.value;
    charactherCounter.textContent = characther.length;

    let words = textArea.value.split(' ').filter((iteam) => {
        return iteam != '';
    });
    wordCounter.textContent = words.length;
    
};