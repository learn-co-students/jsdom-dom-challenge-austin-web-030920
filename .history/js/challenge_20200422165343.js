let timer;
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const counter = document.getElementById('counter');
const likes = document.getElementById('likes')
const allLikes = [];

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    timer = setInterval(incrementCounter, 1000);
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
    let qtyLikes = likedTimes.filter(num => num === counter.innerText.length); 

    if qtyLikes (< 2) {
        let currentLike = document.createElement('li')
        currentLike.id = counter.innerText
        currentLike.innerText = `${counter.innerText} has been liked ${qtyLikes} times`
    }





    // // let likeCounter = 0
    // let likedNum = counter.innerText;
    // console.log(allLikes);
    // allLikes.push(likedNum);
    // let filteredLikes = allLikes.filter(x => x === likedNum).length;
    // console.log('bloop');


    // if (filteredLikes === 0) {
    //     let setID = `like${likedNum}`;
    //     let like = document.createElement('li');
    //     console.log(like)
    //     like.setAttribute(id, setID)
    //     // console.log(like.id);
    //     like.innerText = `The Number ${likedNum} has been liked ${filteredLikes} time(s)`
    // } else if (filteredLikes !== 0) {
    //     let getID = `like${likedNum}`;
    //     let like = document.getElementById(getID);
    //     // console.log(like.id);
    //     like.innerText = `The Number ${likedNum} has been liked ${filteredLikes} time(s)`
    // }

    // likeList = document.getElementById('likes');
    // console.log(likeList);
    // likeList.appendChild(like);
}