const body = document.querySelector("body");
const curtain = document.querySelector(".curtain");

body.onload = function(){
    curtain.style.setProperty('--transformAfter', 'translateX(-100%)');

    curtain.style.setProperty('--transformBefore', 'translateX(100%)')
}