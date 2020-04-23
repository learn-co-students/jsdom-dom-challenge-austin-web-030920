
const cntr = document.getElementById("counter");
const mns = document.getElementById("minus");
const pls = document.getElementById("plus");
const hrt = document.getElementById("heart");
const pse = document.getElementById("pause");
const comnt = document.getElementById("comment-input");
const submt = document.getElementById("comment-form");
const lst = document.getElementById("list")
// div added for buttons area
const buttns = document.getElementById("buttons");
const lkes = document.getElementById("likes");
const likedTimes = []
let timer;
let comntInput;

// 
document.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(setTime, 1000);
    buttns.addEventListener('click', (event) => {
        if (event.target.id == mns.id) { cntr.innerText-- };
        if (event.target.id == pls.id) { cntr.innerText++ };
        if (event.target.id == hrt.id) { likeNumber() };
    });
    pse.addEventListener('click', (event) => {
        if (event.target.id == pse.id) { cntrPseRsm() }
    });
    submt.addEventListener('submit', addComment)
});

function setTime() {
    ++cntr.innerText;
};

function likeNumber() {
    likedTimes.push(cntr.innerText)
    let qtyLikes = likedTimes.filter(num => num === cntr.innerText)
    let rslt = qtyLikes.length

    if (rslt < 2) {
        let currentLike = document.createElement('li')
        currentLike.id = cntr.innerText
        currentLike.innerText = `${cntr.innerText} has been liked ${rslt} times`
        lkes.appendChild(currentLike)
    } else {
        let currentLi = document.getElementById(cntr.innerText)
        currentLi.innerText = `${cntr.innerText} has been liked ${rslt} times`
    };
};

function cntrPseRsm() {
    if (pse.innerText === "pause") {
        pse.innerText = "resume"
        clearInterval(timer)
        mns.disabled = true;
        pls.disabled = true;
        hrt.disabled = true;
    } else if (pse.innerText === "resume") {
        pse.innerText = "pause"
        timer = setInterval(setTime, 1000)
        mns.disabled = false;
        pls.disabled = false;
        hrt.disabled = false;
    };
};

function addComment(event) {
    event.preventDefault();
    let commentParagraph = document.createElement('li')
    commentParagraph.innerText = comnt.value
    lst.appendChild(commentParagraph)
    console.log(event)
    console.log('you hit it, now quit it');
};


