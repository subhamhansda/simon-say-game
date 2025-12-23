let userSeq = [];
let gameSeq = [];
let score=[];
 let max=0;
let btns = ["orange", "green", "blue", "red"];
let level = 0;
let started = false;
let H2 = document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
    }
    levelUp();

})
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        H2.innerHTML=`Gameover press any key to start!<br>your score is ${level}` 
        body=document.querySelector("body");
         body.style.background="red";
        setTimeout(function(){
         body.style.background="white";
        },300);
            
        resetGame(level);
        result();
    }
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);

    checkAns(userSeq.length - 1);
}
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 300);
}
function levelUp() {
    level++;
    userSeq = [];

    H2.innerText = `Level ${level}`;
    randIdx = Math.floor(Math.random() * 4);
    randCol = btns[randIdx];
    randBtn = document.querySelector(`.${randCol}`);
    gameCol = randBtn.getAttribute("class");
    gameSeq.push(gameCol);
    gameFlash(randBtn);
}
function btnPress() {
    btn = this;
    userCol = btn.getAttribute("class");
    userSeq.push(userCol);
    userFlash(btn);


}


allBtns = document.querySelectorAll("#btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);

}

function resetGame(){
score.push(score);
started = false;
userSeq = [];
gameSeq = [];
level = 0;
}

