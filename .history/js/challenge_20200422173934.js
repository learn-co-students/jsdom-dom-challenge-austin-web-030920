let timer;
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const counter = document.getElementById('counter');
const likes = document.getElementById('likes')
const subComment = document.getElementById('comment-form');
const allLikes = [];

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    timer = setInterval(incrementCounter, 1000);
    subComment.addEventListener('submit', addComment);
});

function incrementCounter() {
    counter.innerText++;
    
    // console.log(counter.innerText)
    timerButton = document.getElementById('timerButton');
    timerButton.addEventListener('click', toggleTimer);
    minus.addEventListener('click', decrementTimer);
    plus.addEventListener('click', incrementTimer);
    heart.addEventListener('click', addLike);
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
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    }
}

function incrementTimer(event) {
    counter.innerText++
}

function decrementTimer(event) {
    counter.innerText--
}


function addLike(event) {
    allLikes.push(counter.innerText);
    let qtyLikes = allLikes.filter(num => num === counter.innerText).length; 

    if (qtyLikes < 2) {
        let currentLike = document.createElement('li');
        currentLike.id = counter.innerText;
        currentLike.innerText = `${counter.innerText} has been liked ${qtyLikes} times`;
        likes.appendChild(currentLike);
    } else {
        let currentLike = document.getElementById(counter.innerText);
        currentLike.innerText = `${counter.innerText} has been liked ${qtyLikes} times`;
    }
}

function addComment(event) {
    console.log('test');
    event.preventDefault();
    let comments = document.getElementById('list');
    let commentText = document.getElementById('comment-input');
    let comment = document.createElement('li');
    comment.innerText = commentText

    comments.appendChild(comment)
}