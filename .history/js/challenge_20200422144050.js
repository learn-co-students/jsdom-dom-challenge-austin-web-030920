let timer;
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = documentu.getElementById('heart');
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    timer = setInterval(incrementCounter, 1000);
});

function incrementCounter() {
    let counter = document.getElementById('counter');
    counter.innerText++;
    
    // console.log(counter.innerText)
    timerButton = document.getElementById('timerButton');
    timerButton.addEventListener('click', toggleTimer);
}

function toggleTimer(event) {
    // console.log(event.target);

    if (event.target.innerText === 'pause') {
        clearInterval(timer);
        event.target.innerText = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
    } else if (event.target.innerText === 'resume') {
        timer = setInterval(incrementCounter, 1000);
        event.target.innerText = 'pause';
    }
}