


const deleteelement = document.getElementById("delete")
deleteelement.addEventListener("click", smazat)
function smazat() {

  const name = userdata.name;
  send("delete", name);

}

function send(parametr, value) {

  console.log("ahoj");

  socket.emit(parametr, value);

}
