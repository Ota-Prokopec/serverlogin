


const err = {
  password:"password is not right, you can have one more attemp",
  err:"sorry something went wrong, try it again",
  acount:"acount with this name is not exist",
  acounthasbeenindatabase:"i am sorry this acount has been loged you can have another name",
  delka:"password must be same like second password and name and password have to have length bigger than four chars",
  login:"you are not log in, log in and you can do a quiz",
  did:"you already did this quiz or this quiz is not exist"
}
const errel = document.getElementById("error")
const errelstyle = document.getElementsByClassName("error")[0]
function errors(value) {

  console.log("value");

  errelstyle.style.display = "grid"

  errel.innerHTML = value

}
errel.addEventListener("click", function () {

  errelstyle.style.display = "none"

})
