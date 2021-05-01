
let obj;
document.getElementById("arrayscore").addEventListener("click", () => {
  const element = event.srcElement;

  const string = element.innerText;
  // click to quiz




  if (element.className === "onequiz") {

    clicktoquiz(element, obj.object);

  }
  else if (element.className === "item") {

    //console.log(string);

    const find = findName(string)

    //console.log(find);

    const quiz = dotable(find);

    //console.log(quiz);

    obj = quiz

    //console.log(vyplneni[element.getAttribute("type")]);
    const text = document.getElementById("scorebook")
    const i = vyplneni[element.getAttribute("type")];

    text.innerHTML = ""


                  console.log(quiz.jmeno, quiz.jmeno.length);
       for (let pos = 0; pos < quiz.jmeno.length; pos ++) {

         const el = Ota.createElementByTagName("div", {class:"onequiz"}, `${quiz.jmeno[pos]}`)

         appendElement(text, el)

       }


  }



})







function clicktoquiz(element, value) {

    const hodnota = ["špatně", "správně"]

  const name = value[0].kdo;
  const quiz = value[0].jmenoslozky;
  const text = document.getElementById("scorebook")
  const string = element.innerText;
  text.innerHTML = "";
  for (let pos = 0; pos < value.length; pos ++) {


    const object = value[pos]
    console.log(string, object.jmenoslozky);
    if (object.jmenoslozky === string) {

      console.log("this is value of hodnota", object.hodnota);


      const element = Ota.createElementByTagName("div", {class:"textofacount"}, `otazka je ${object.otazka} odpovedel ${hodnota[parseInt(object.hodnota)]}`)
      appendElement(text, element)
    }
    else {
      console.log("error you have one file more juuu");
    }


  }

}






function dotable(value) {

  const an = []
  const aj = []
  const ao = {



  }

  for (let pos = 0; pos < value.length; pos ++) {

    console.log(value[pos].jmenoslozky, ao[value[pos].jmenoslozky]);

    if (ao[value[pos].jmenoslozky] !== true) {

      an.push(value[pos].jmenoslozky);

      ao[value[pos].jmenoslozky] = true


    }
    aj.push(value[pos])

  }

  return {jmeno:an, object:aj}
}

function findName(value) {

  const an = []

  for (let pos = 0; pos < vyplneni.length; pos ++) {

    const name = vyplneni[pos].kdo;

    //console.log(name);

    if (name === value) {

             an.push(vyplneni[pos]);

    }

  }

             return an;

}
