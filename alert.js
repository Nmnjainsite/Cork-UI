var leftDrawerIcon = document.querySelector("#left-drawer-icon");

leftDrawerIcon.addEventListener("click",showLeftBar);

function showLeftBar(){
    document.querySelector(".nav-bar").style.visibility="visible";
    document.querySelector(".nav-bar>ul").style.width="80%";
    document.querySelector(".nav-bar>ul").style.marginTop="4rem";
    document.querySelector(".nav-bar>ul").style.borderRight="none"
    document.querySelector(".col-2").style.marginTop = "60rem"
  
}