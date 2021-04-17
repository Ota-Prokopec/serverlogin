


window.addEventListener("keypress", () => {
  if (event.key === "Enter") {

    logIn();

  }
})
function logIn() {

  console.log("ahoj");

  const name = document.getElementById("getName").value
  const password0 = document.getElementById("password0").value
  const password1 = document.getElementById("password1").value

  if (name.length > options.name.delka && password0 === password1) {



    console.log("socket");



    socket.emit('login', name, password0);

  }



}


socket.on("amILog", function (data) {

  if (data) {
    console.log("i am log database");
  }
  else {
    console.log("this name already was in database you can have another name");
  }

})
