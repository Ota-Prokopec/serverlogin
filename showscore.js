

let canIShowScore = false  ;
function showscore() {

  canIShowScore = true;

  socket.emit("score", {

    name:userdata.name,
    password:userdata.password,

  })

}


function doNoneLogin(value) {

  if (canIShowScore) {
    document.getElementById("arrayscore").style.display = value
    }


}






socket.on("answerOutput", (data) => {

  //console.log(data);
  doselect(data);

  //uložit data do globální
  vyplneni = data;

})



function doselect(data) {

  const uztuje = {



  }

  const frag = document.createDocumentFragment();

  const arrayscore = document.getElementById("arrayscore")

  //delete users který byli ukázaní předtím, souží to proto aby se nestakovali jména, protože když budu pořád appendovat a ty jména který tam byli předním nebudu mazat bude tam několikrát stejné jména
  const itemclass = document.getElementsByClassName("item")
  for (let i = 0; i < itemclass.length; i ++) {


    itemclass[i].remove()

  }

  for (let pos = 0; pos < data.length; pos ++) {
    //console.log("this is math up");

    if (uztuje[data[pos].kdo] !== true) {
      uztuje[data[pos].kdo] = true;

      const element = Ota.createElementByTagName("div", {class:"item", type:pos}, `${data[pos].kdo}`)
      appendElement(frag, element)
    }



  }
  appendElement(arrayscore, frag)

}
