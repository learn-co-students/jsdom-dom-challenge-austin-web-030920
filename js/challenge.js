document.addEventListener("DOMContentLoaded", () => {
    let time = document.getElementById("counter").textContent
    let likes = {}

    let interval = -1
    pauseButton();
    document.getElementById("pause").addEventListener("click", pauseButton);
    document.getElementById("minus").addEventListener("click", decrement);
    document.getElementById("plus").addEventListener("click", increment);
    document.getElementById("heart").addEventListener("click", like);
    document.getElementById("comment-form").addEventListener("submit", comment)
    

    function pauseButton() {
        // Could do DRY here but I want to get on with the labs.
        minus = document.getElementById("minus");
        plus = document.getElementById("plus");
        heart = document.getElementById("heart");
        pause = document.getElementById("pause");
        if (interval == -1) {
            timer();
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            pause.textContent = "pause"
        } else {
            clearInterval(interval)
            interval = -1
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            pause.textContent = "resume"
        }


    }

    function decrement() {
        time--;
        document.getElementById("counter").textContent = time;
    }

    function increment() {
        time++;
        document.getElementById("counter").textContent = time;
    }

    function like() {
        list = document.getElementsByClassName("likes")[0]
        // if hash already exists, increment by 1, else create new hash for that timer number.
        if (Object.keys(likes).includes(time)) {
            likes[time]++
            document.getElementById(`time${time}`).textContent = ` Time ${time} has been liked ${likes[time]} times. ` 
        } else {
            likes[time] = 1
            list.innerHTML += `<li id=time${time}> Time ${time} has been liked ${likes[time]} times.  </li>`
        }   
    }

    function comment(event) {
        comments = document.getElementById("list")
        let newComment = document.getElementById("comment-input").value
        comments.innerHTML += `<li>${newComment}</li>`
        event.preventDefault();
    }


    function timer() {
        interval = setInterval(() => {
            let parsed = parseInt(time)
            parsed += 1
            document.getElementById("counter").textContent = parsed
            time = document.getElementById("counter").textContent

        }, 1000);
    }


});