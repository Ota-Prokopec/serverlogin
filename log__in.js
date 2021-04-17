


window.addEventListener("keypress", () => {

  if (event.key === "Enter") {

    prihlasit();

  }

})
function prihlasit() {

  const name = document.getElementById("nameToLogIn").value
  const password = document.getElementById("passwordToLogIn").value

         socket.emit("prihlasit", name, password);

}
