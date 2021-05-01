













//here is score table to display table


socket.on("password == true", function(data) {


  if (data !== false) {


    console.log(data.name, data.password);

    createacount({name:data.name});

    userdata.name = data.name;
    userdata.password = data.password;

    //play game hraf hash
    playgame();
    //do score table
    doNoneLogin("table");




  }
  else {

    errors(err.password);

  }


    });

    const ucet = document.getElementById("ucet")


      /*ucet.addEventListener("click", function () {for exit from login i will do this logout with keypress

        website();

      })*/

      let canIPressEscape = true;
      window.addEventListener("keydown", () => {

        if (event.key === "Escape") {

             if (canIPressEscape) {

               canIPressEscape = false//i can not press this more time than i will key up this key

               website();//i must clean input questionToDoClick because if i will login this window will display flex

                                   //

             }                                             //

        }                                                   //

      })                                                 //

     window.addEventListener("keyup", () => {            //

       if (event.key === "Escape") {                   //
                                                     //
         canIPressEscape = true;///////////////////////

       }

     })



      function createacount({name, password}) {

        const nameforlog = document.getElementById("nameforlog")
        ucet.style.display = "flex"
        const namenone = document.getElementById("nameToLogIn")
        const passwordnone = document.getElementById("passwordToLogIn")
        passwordnone.style.display = "none"
        namenone.style.display = "none"
        nameforlog.innerHTML = name;

        //value = "" aby se mi více nepřihlasovali
        const nameToLogIn = document.getElementById("nameToLogIn").value = ""
        const passwordToLogIn = document.getElementById("passwordToLogIn").value = ""

        const exit = document.getElementById("ESexit")
        exit.style.display = "flex"







      }



        function website() {

          ucet.style.display = "none"
          const namenone = document.getElementById("nameToLogIn")
          const passwordnone = document.getElementById("passwordToLogIn")
          passwordnone.style.display = "flex"
          namenone.style.display = "flex"
          const cardScreen = document.getElementById("cardScreen")
          cardScreen.style.display = "none"



                 //table od uživatelů kteří dělali váš quiz
          document.getElementById("arrayscore").style.display = "none"

          const sharearray = document.getElementById("wrapshare")
          sharearray.style.display = "none"
          block__login("none", "block")

          //do word exit none
          const exit = document.getElementById("ESexit")
          exit.style.display = "none"

          //clean input questionToDoClick
          const qtdc = document.getElementById("questionToDoClick")
          qtdc.value = ""


        }
