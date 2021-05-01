




window.addEventListener("keypress", function () {

  if (event.key === "Enter") {

    const qucl = document.getElementById("questionToDoClick").value
    options.nameOfQuestion = qucl;

    console.log(qucl);

    if (qucl !== "") {

      questionToDoClick();

      //do display none to table for score user
      doQuizScoreTable(false)

    }


  }


})
function questionToDoClick() {

  const cardScreen = document.getElementById("cardScreen")

  cardScreen.style.display = "flex"

  const qucl = document.getElementById("questionToDoClick")
  qucl.style.display = "none"

}
