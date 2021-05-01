

function udelatodkaz(value) {

  const name = userdata.name;
  const id = value;
  return `http://localhost:8080?name=${name}&id=${id}`

}



function writetoinput(value) {

  const text = document.getElementById("inputShare")
      text.value = value







               //function for copy text


               text.addEventListener("click", () => {

                 copyString(text.value)

               })

}











function copyString(value) {


    const copyText = document.getElementById("inputShare")


    console.log(copyText);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");

}



function set__shareitem() {

  const shareelement = document.getElementsByClassName("shareitem")

  console.log(shareelement);

    for (let pos = 0; pos < shareelement.length; pos ++) {

    shareelement[pos].addEventListener("click", (e) => {

      const element = e.srcElement;
      const string = element.innerText;
      writetoinput(udelatodkaz(string))
      console.log(string);

    })

  }


}
