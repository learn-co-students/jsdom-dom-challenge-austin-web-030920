document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let timer = setInterval(incrementCounter, 1000);
});

function incrementCounter() {
    let counter = document.getElementById('counter')
    let counterInt = counter.innerText.parseInt();
    counterInt++
    counter.innerText = counterInt.toString();
}