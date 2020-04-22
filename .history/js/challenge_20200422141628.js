let timer;
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

    if (event.target.innerText = 'pause') {
        clearInterval(timer);
        event.target.innerText = 'resume';
    } else if (event.target.innerText = 'resume') {
        timer;
    }
}