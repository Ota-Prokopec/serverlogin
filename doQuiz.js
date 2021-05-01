


let scores = {
  bad:0,
  good:0
}



const array = []
socket.on("completequestion", function (data) {
  ////console.log(data);



  if (data === false) {
    errors(err.acount)
  }
  else {

    if (data === "youAlreadyDidThis") {
      errors(err.did)

    }

    else {


                   array.push(data);

                        setTimeout(() => {

                          createQuiz(array)

                        }, 144)



    }
  }



})





function createQuiz(data) {

  blockcardforquiz();
  startQuiz(data);

}




let localvarriableforloopdata = 0;


function startQuiz(data) {

  //console.log(data);

                 if (Array.isArray(data)) {

                   userdata.data = data;

                      //console.log("this is array", data);

                  writeForQuizToInput(data[localvarriableforloopdata])
                  youclickforquiz(data[localvarriableforloopdata].side, data);

                 }
                 else {

                 //console.log("this is not array", data);

                 writeForQuizToInput(data)

                 youclickforquiz(data.side, undefined);

                 }

}

let click = true;
function youclickforquiz(data, value) {






  let strana = 0;

  const card0 = document.getElementById("card0")
  const card1 = document.getElementById("card1")


         if (click) {click = false


  card0.addEventListener("click", function () {

      check(0);//console.log("card");
      if (value !== undefined) {


        next(value);

      }


  })


  card1.addEventListener("click", function () {

     check(1);
     if (value !== undefined) {


       next(value);

     }


  })
}





function konec() {

  //console.log("konec");

  const card = document.getElementById("cardScreen")
  card.style.display = "none"
  errors("you have " + scores.bad + " badly " + "and " + scores.good + " well")


}






// is equl localvarriableforloopdata with value.side question konec

function next(value) {

  //console.log(localvarriableforloopdata);


  if (value !== undefined) {

    if (localvarriableforloopdata < array.length-1) {



      localvarriableforloopdata ++ ;

      startQuiz(value);

    }
    else {
      konec();
    }

  }

         //deleteinput();

}




      function check(value) {


        if (data == value) {

          reknimiscore(true);

          scores.good ++;

          ////console.log(true);

        }
        else {

          reknimiscore(false);

          scores.bad ++;
          ////console.log(false);
        }

      }







          function reknimiscore(i) {

            const value = userdata.data


            if (Array.isArray(value)) {
              socket.emit("score", {password:userdata.password,kdo:userdata.name, komu:value[localvarriableforloopdata].name, file:value[localvarriableforloopdata].nameOfQuestion, question:value[localvarriableforloopdata].question, i:i});
                  ////console.log(value[localvarriableforloopdata].name);
            }
            else {
              socket.emit("score", {kdo:userdata.name, komu:value.name, file:value.nameOfQuestion, question:value.question, i:i, password:userdata.password});
            }


          }


}



function writeForQuizToInput(data) {

  userdata.data = data;

  ////console.log(data);

  const otazka = document.getElementById("otazka")
  const answer0 = document.getElementById("text0")
  const answer1 = document.getElementById("text1")
  const img0 = document.getElementById("i0")
  const img1 = document.getElementById("i1")
  const background0 = document.getElementById("card0")
  const background1 = document.getElementById("card1")

  otazka.value = data.question;
  answer0.value = data.answer0;
  answer1.value = data.answer1;
  img0.style.display = "none"
  img1.style.display = "none";

  console.log("img", data.img1, data.img0);

  if (data.img0 !== "" && data.img1 !== "") {

    background0.style.backgroundImage = `url(${data.img0})`
    background1.style.backgroundImage = `url(${data.img1})`

  }


}








function blockcardforquiz() {

  const cardScreen = document.getElementById("cardScreen")
  cardScreen.style.display = "flex"



}
