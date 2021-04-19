


const err = {
  password:"name or password is not right, you can have one more attemp",
  err:"sorry something went wrong, try it again",
  acount:"acount with this name is not exist",
  acounthasbeenindatabase:"i am sorry this acount has been loged you can have another name",
  delka:"length of name or password must be bigger than 5 chars for your safe",
  login:"you are not log in, log in and you can do a quiz",
  did:"you already did this quiz"
}
const errel = document.getElementById("error")
function errors(value) {

  console.log("value");

  errel.innerHTML = value

}
errel.addEventListener("click", function () {

  errel.innerHTML = ""

})
