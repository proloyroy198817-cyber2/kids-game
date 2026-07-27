let score = 0;

const balloon = document.getElementById("balloon");
const scoreText = document.getElementById("score");

function moveBalloon() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 200;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    balloon.style.left = x + "px";
    balloon.style.top = y + "px";
}

balloon.addEventListener("click", function () {
    score++;
    scoreText.innerText = score;
    moveBalloon();
});

moveBalloon();
