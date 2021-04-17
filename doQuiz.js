


socket.on("completequestion", function (data) {

  if (data === false) {
    console.log("tento účet není");
  }
  else {
    createQuiz(data)
  }


})





function createQuiz(data) {

  blockcardforquiz();
  startQuiz(data);

}




let localvarriableforloopdata = 0;


function startQuiz(data) {

                 if (Array.isArray(data)) {

                  writeForQuizToInput(data[localvarriableforloopdata])
                  youclickforquiz(data[localvarriableforloopdata].side);

                 }
                 else {

                 writeForQuizToInput(data)

                 youclickforquiz(data.side);

                 }

}


function youclickforquiz(data) {


  let strana = 0;

  const card0 = document.getElementById("card0")
  const card1 = document.getElementById("card1")

  card0.addEventListener("click", function () {

      check(0);

  })


  card1.addEventListener("click", function () {

     check(1);

  })







      function check(value) {


        if (data == value) {

          console.log(true);

        }
        else {
          console.log(false);
        }

      }


}



function writeForQuizToInput(data) {

  console.log("ahoj");

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

  if (data.background0 !== "" && data.background1 !== "") {

    background0.style.backgroundImage = `url(${data.background0})`
    background1.style.backgroundImage = `url(${data.background1})`

  }


}








function blockcardforquiz() {

  const cardScreen = document.getElementById("cardScreen")
  cardScreen.style.display = "flex"



}
