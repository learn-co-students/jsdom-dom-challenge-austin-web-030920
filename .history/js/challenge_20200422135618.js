document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let timer = setInterval(incrementCounter, 1000);
});

function incrementCounter() {
    let counter = document.getElementById('counter')
    counter.innerText++
    // console.log(counter.innerText)
    timerButton = getElementById('timerButton')
    timerButton.addEventListener('click', toggleTimer);
}

function toggleTimer(event) {
    if 
}