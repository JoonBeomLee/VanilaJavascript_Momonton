const body = document.querySelector("body");
const chImgBtn = document.querySelector(".chgImg-btn");

const IMG_NUMBER = 3;
let currentImgNumber;

function chgImg(){
    genRandom();
    rePaintImage();
}

function rePaintImage(){
    const bgImg = document.querySelector(".bgImg");
    bgImg.src = `./img/bg_${currentImgNumber+1}.jpg`;
}

function paintImage(){
    const image = new Image();
    const imgNumber = currentImgNumber;

    image.className = "bgImg";
    image.src = `./img/bg_${imgNumber+1}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);   
}

function genRandom(){
    currentImgNumber = Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
    chImgBtn.addEventListener("click", chgImg);
}

init();