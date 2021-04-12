






window.addEventListener("keypress", () => {
  if (event.key === "Enter") {

    isAcountRight();

  }
})

function isAcountRight() {

  //get input
  const name = document.getElementById("getName").value;
  console.log(name.length);
  const password0 = document.getElementById("password0").value;
  const password1 = document.getElementById("password1").value;

  isnotthisaccountindatabase(name);



////////////promise


    databasepromise.then((canI) => {

      console.log(canI);

      if (canI.value) {

        if (name !== "" && password0 !== "" && password1 !== "" && password0 === password1 && name.length > 4 && password0.length > 4) {
          console.log(name, password1, password0, options.name.delka);

          createAcount(name, password0);

        }

      }
      else {

        console.log("this name is at database you must have another name");
        /*
             acount was written you must do another acouunt
        */
      }

    });








////////////



}
function createAcount(name, password) {

  console.log(name);



  socket.emit('createAcount', {
     name:name,
     password:password
  });



}
// acount
