



const qucl = document.getElementById("questionToDoClick").value
// qucl is using in createQuestion


let canshowoff = true;
window.addEventListener("click", () => {

           if (event.srcElement.className === "card") {
             console.log("this is my card");
             const strana = event.srcElement.getAttribute("pos");



       const logScreen = document.getElementById("logScreen")




       const jevyplnene = isFullText();
       const zkoukniobrazky = isPicture();
       console.log(jevyplnene);
       if (jevyplnene.ifis && zkoukniobrazky) {

         poslidataquestion({strana:strana});

       }
           }







})




function poslidataquestion(data) {

  const i0 = document.getElementById("i0").value
  const i1 = document.getElementById("i1").value
const question = document.getElementById("otazka").value
  const answer0 = document.getElementById("text0").value
  const answer1 = document.getElementById("text1").value
    const nameofquestion = "ahoj"



          socket.emit("dataquestion",
             {
              question:question,
             img0:i0,
              img1:i1,
               answer0:answer0,
                answer1:answer1,
                side:data.strana,
                nameOfQuestion:nameofquestion,
                  name:userdata.name,
                password:userdata.password,
                nameOfQuestion:options.nameOfQuestion
              }


            );





      deleteinput();

}




























function isPicture() {

  const i0 = document.getElementById("i0").value
  const i1 = document.getElementById("i1").value
  if (i1 !== "" && i0 !== "") {
    return true
  }

}


function isFullText() {

  const question = document.getElementById("otazka").value
  const answer0 = document.getElementById("text0").value
  const answer1 = document.getElementById("text1").value
  if (question !== "" && answer1 !== "" && answer0 !== "") {

    return {ifis:true, q:question, a0:answer0, a1:answer1}

  }
  else {
    return {ifis:false}
  }

}
