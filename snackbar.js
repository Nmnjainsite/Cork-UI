// ------------first snackbar js-----------//
const mailBtn = document.querySelector(".mail-btn");
const mailBar = document.querySelectorAll(".mail-bar") ;

mailBtn.addEventListener("click",clickHandler)

function clickHandler() {
document.querySelector(".mail-bar").style.visibility="visible";
setTimeout (() => 
document.querySelector(".mail-bar").style.visibility="hidden"
,1000)
}

const addBtn = document.querySelector(".add-btn");



addBtn.addEventListener("click",addToCart)

function addToCart (){
    document.querySelector(".cart-text").style.visibility = "visible";

    setTimeout ( () =>
    document.querySelector(".cart-text").style.visibility="hidden"
    ,1000)
}

//-------toast bar------------------

const toastBtn = document.querySelector(".toast-btn");
toastBtn.addEventListener("click" ,function hideToast(){
    document.querySelector(".toast-box").style.visibility = "visible";
    setTimeout (() => 
    document.querySelector(".toast-box").style.visibility = "hidden",3000)
})

const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click",function hideText(){
    document.querySelector(".toast-box").style.visibility = "hidden";

    setTimeout(() => 
    document.querySelector(".toast-box").style.visibility = "hidden",5000)
} )

// -----------positioned snackbars js-----------------

const positionBtn = document.querySelector(".position-btn");

positionBtn.addEventListener("click",function checkPosition(){
document.querySelector(".position-snackbar").style.visibility = "visible";
setTimeout(() => 
document.querySelector(".position-snackbar").style.visibility = "hidden",1000)
})

const topRightBtn = document.querySelector(".top-right-btn");

topRightBtn.addEventListener("click",function rightPosition(){
document.querySelector(".position-snackbar-2").style.visibility = "visible";
setTimeout(() => 
document.querySelector(".position-snackbar-2").style.visibility = "hidden",1000)
})


const bottomRightBtn = document.querySelector(".bottom-right-btn");

bottomRightBtn.addEventListener("click",function bottomRightPosition(){
    document.querySelector(".position-snackbar-3").style.visibility = "visible";
setTimeout(() => 
document.querySelector(".position-snackbar-3").style.visibility = "hidden",1000)
})

const bottomLeftBtn = document.querySelector(".bottom-left-btn");

bottomLeftBtn.addEventListener("click",
function bottomLeftPosition(){
    document.querySelector(".position-snackbar-4").style.visibility = "visible";
    setTimeout(() => 
    document.querySelector(".position-snackbar-4").style.visibility = "hidden",1000)
}
)