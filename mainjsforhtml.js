


const logScreen = document.getElementById("log")
const cardScreen = document.getElementById("cardplay")

const buttonforexitback = document.getElementById("buttonforexitback")

function block__login(value, value1) {

     logScreen.style.display = value;
     cardScreen.style.display = value1;

}


const loginbutton = document.getElementById("loginbutton")
loginbutton.addEventListener("click", () => {
  //

  const name = document.getElementById("nameToLogIn").value = ""
  const password = document.getElementById("passwordToLogIn").value = ""

  //
  block__login("block", "none");
})
buttonforexitback.addEventListener("click", () => {
  //
  const name = document.getElementById("getName").value = ""
  const password0 = document.getElementById("password0").value = ""
  const password1 = document.getElementById("password1").value = ""
  //
  block__login("none", "block")
})
