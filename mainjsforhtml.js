


const logScreen = document.getElementById("log")
const cardScreen = document.getElementById("cardplay")

const buttonforexitback = document.getElementById("buttonforexitback")

function block__login(value, value1) {

     logScreen.style.display = value;
     cardScreen.style.display = value1;

}


const loginbutton = document.getElementById("loginbutton")
loginbutton.addEventListener("click", () => {
  block__login("block", "none");
})
buttonforexitback.addEventListener("click", () => {
  block__login("none", "block")
})
