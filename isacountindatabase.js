


let databasepromise;

function isnotthisaccountindatabase(name) {


    //read
     databasepromise = new Promise((resolve, reject) => {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          const object = JSON.parse(this.responseText);
          console.log(object);
          if (object.acount[name] === undefined) {
            resolve({value:true, object:object});
          }
          else {
            resolve({value:false, object:object});
          }
    }
  };
  xhttp.open("GET", options.file, true);
  xhttp.send();


  //read
})
}
