


function doQuizScoreTable(value) {

  const table = document.getElementById("arrayscore")
  const tu = document.getElementById("scorebook")
  const cardScreen = document.getElementById("cardScreen")
  const questionName = document.getElementById("questionToDoClick")

  if (value) {
    table.style.display = "table"
    tu.style.display = "grid"
    cardScreen.style.display = "none"
    questionName.style.display = "flex"
  }
  else {
    table.style.display = "none"
    tu.style.display = "none"
    cardScreen.style.display = "flex"
    questionName.style.display = "none"
  }




}




const bFEQ = document.getElementById("score")
bFEQ.addEventListener("click", () => {

  if (userdata.name !== "") {

    doQuizScoreTable(true)

  }


})
