


let databasepromise;




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

  let canI = isnotthisaccountindatabase(name);

  databasepromise.then(function () {

    //promise

    if (canI) {

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


  }
  function createAcount(name, password) {

    console.log(name);



    socket.emit('createAcount', {
       name:name,
       password:password
    });

//promise
  });




}
// acount

function isnotthisaccountindatabase(name) {


    //read
     databasepromise = new Promise((resolve, reject) => {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          const object = JSON.parse(this.responseText);
          console.log(object);
          if (object.acount[name] === undefined) {
            return true
          }
          else {
            return false
          }
    }
  };
  xhttp.open("GET", options.file, true);
  xhttp.send();


  //read

}
}
