


window.addEventListener("keypress", () => {

  if (event.key === "Enter") {
    log__in()
  }

})


function log__in() {

  const name = document.getElementById("nameToLogIn").value
  const password = document.getElementById("passwordToLogIn").value

  // if not name === ""




  if (password.length > options.password.delka && name.length > options.name.delka && password !== "" && name !== "") {

    isnotthisaccountindatabase(name);

    databasepromise.then((database) => {

      const value = database.object;

      console.log(value);



       if (value.acount[name] === undefined) {

         console.log("acount isn't log");
         loged("acount isn't log");

       }
       else {
         if (value.acount[name].password === password) {

           console.log("you are loggined");
                loged(name);

         }
         else {
           console.log("you type bad password");
           loged("bad password");
         }
       }



    })
  }

}
