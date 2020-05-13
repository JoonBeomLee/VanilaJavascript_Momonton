const inputNmForm = document.querySelector(".js-greetingsForm");
const inputNm = document.querySelector(".js-greetingsForm-input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = inputNm.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    inputNmForm.classList.add(SHOWING_CN);
    inputNmForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    console.log(inputNmForm);
    inputNmForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();