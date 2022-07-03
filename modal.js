// -----------modal one-------------------
const openBtn = document.querySelector("#open-btn");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const modalContent = document.querySelectorAll(".modal-content")
openBtn.addEventListener("click" ,clickHandler)

function clickHandler(){
    document.querySelector(".modal-content").style.visibility = "visible";
}

yesBtn.addEventListener("click",clickHandler2)

function clickHandler2 (){
    document.querySelector(".modal-content").style.visibility = "hidden";
}

noBtn.addEventListener("click",clickHandler3)

function clickHandler3 (){
    document.querySelector(".modal-content").style.visibility = "hidden";
}

// -----------------modal two(nested modal)------------------

const showMsgBtn = document.querySelector(".show-msg-btn");
const playBtn = document.querySelector("#play-btn");
const notBtn = document.querySelector("#not-btn");
const msgBox = document.querySelectorAll(".msg-box")
const gameBox = document.querySelectorAll(".game-box")
const startBtn = document.querySelector("#start-btn")
const endBtn = document.querySelector("#end-btn")
const cardContainer = document.querySelectorAll(".card-container");


showMsgBtn.addEventListener("click" ,showContainer)

function showContainer(){
    document.querySelector(".msg-box").style.visibility = "visible";
}

playBtn.addEventListener("click",hideBox)

function hideBox (){
    document.querySelector(".game-box").style.visibility = "visible";
}

notBtn.addEventListener("click",hideBox2)

function hideBox2 (){
    document.querySelector(".msg-box").style.visibility = "hidden";
}

startBtn.addEventListener("click",hideGameBox)

function hideGameBox(){
    document.querySelector(".game-box").style.visibility="hidden"
}

endBtn.addEventListener("click",hideCardBox)

function hideCardBox(){
    document.querySelector(".game-box").style.visibility="hidden"
}