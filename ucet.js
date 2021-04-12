


const user = document.getElementById("user")
const namefordelete = document.getElementById("nameToLogIn")
const passwordfordelete = document.getElementById("passwordToLogIn")
function loged(name) {



  passwordfordelete.style.display = "none";
  namefordelete.style.display = "none";
  user.style.display = "flex";

  const text = document.getElementById("user__name")
  text.innerHTML = name;
  console.log(name);

  userdata.name = name;




}

user.addEventListener("click", () => {
  exitFromLogIn();
})



    let canIPressKey = true;
window.addEventListener("keydown", (event) => {

       if (event.key === "Escape") {
         if (canIPressKey) {
           exitFromLogIn();
           canIPressKey = false;
         }

       }
})
window.addEventListener("keyup", (event) => {
       if (event.key === "Escape") {
         canIPressKey = true;
       }
})


function exitFromLogIn() {

  passwordfordelete.style.display = "flex";
  namefordelete.style.display = "flex";
  user.style.display = "none";

}
