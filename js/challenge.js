

document.addEventListener('DOMContentLoaded', () => {

    // COUNTER
    // select h1 tag and set the inner text = to the setInterval
    let isPaused = false;
    let counter = 0;
    window.setInterval(count, 1000);

    function setCounter() {
        document.getElementById("counter").textContent = counter
    };

    function count() {
        if (!isPaused) {
            incrementCounter();
        };
    };


    // Plus and Minus buttons
    const plus = document.getElementById("plus");
    const minus = document.getElementById('minus');

    plus.addEventListener('click', () => {
        incrementCounter()
    });

    minus.addEventListener('click', () => {
        decrementCounter()
    });

    function incrementCounter() {
        counter++;
        setCounter();
    };

    function decrementCounter() {
        counter--;
        setCounter();
    };
    // PAUSE
    const pause = document.getElementById("pause")
    pause.addEventListener('click', togglePause);

    function togglePause() {
        isPaused = !isPaused
        if (isPaused) {
            pause.textContent = 'resume';
        } else {
            pause.textContent = 'pause';
        };
    };

    // HEART

    function setLiNode() {
        return document.querySelectorAll('[data-num]')
    };

    function selectLiByNum(num) {
        const liNode = setLiNode()
        for (let i = 0; i < liNode.length; i++) {
            if (liNode[i].dataset.num == num) {
                return liNode[i];
            };
        };
    };

    function addLike() {
        const li = selectLiByNum(counter);
        let likes = parseInt(li.children[0].innerText) + 1
        li.innerHTML = `${counter} has been liked <span>${likes}</span> times`;
    };

    function createNewLike() {
        const ul = document.getElementsByClassName('likes')[0]
        const li = document.createElement('li')
        li.dataset.num = counter
        li.innerHTML = `${counter} has been liked <span>1</span> time`
        ul.append(li);
    };

    function handleLike() {
        if (setLiNode() != undefined) {
            if (selectLiByNum(counter) != undefined) {
                addLike()
            } else {
                createNewLike()
            };
        } else {
            createNewLike()
        };
    };

    const heartButton = document.getElementById("heart");
    heartButton.addEventListener('click', handleLike);

    // Leave a comment
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', createComment)
    
    function createComment(event) {
        event.preventDefault()
        const div = document.createElement('div');
        div.innerText = document.getElementById('comment-input').value;
        const daddyDiv = document.getElementById('list');
        daddyDiv.append(div);
        document.getElementById('comment-input').value = ''
    };
});