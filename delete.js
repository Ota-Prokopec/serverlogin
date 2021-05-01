


const deleteadd = document.getElementById("delete")
deleteadd.addEventListener("click", () => {

  deleteuser();

})
function deleteuser() {


  socket.emit("delete", userdata);

}
socket.on("isdelete", function (data) {

  if (data) {

    console.log("acount is deleted");

    alert("acout was deleted")

    block__login("none", "block");

  }
  else {

    console.log("acount is not deleted, because you tried to hack this acount");

    alert("acout was not deleted, because you tried to delete acount with bad user name or password")

  }

})
