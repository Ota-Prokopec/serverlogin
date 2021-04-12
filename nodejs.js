






function createServer(serveConection, ...write) {
  const http = require('http');

http.createServer(function (req, res) {
  console.log("server is working jet");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  for (let pos = 0; pos < write.length; pos++) {
    res.write(write[pos]);
  }
  res.end();
}).listen(serveConection);
}






function writeFile(file, text) {
  const fs = require('fs')

fs.writeFile(file, JSON.stringify(text), err => {
  if (err) {
    console.error(err)
    return
  }
    console.log("written");
})
}



function readFile(file) {
  const fs = require('fs');
  var Promise = require('promise');
  var readStream = fs.createReadStream(file);
    let pos = 0;
     return new Promise((resolve, reject) => {

       fs.readFile(file, 'utf8' , (err, data) => {
         if (err) {
           console.error("err")
           return
         }
         resolve(JSON.parse(data));

     });

});


}




function makecodefromurl(urlthis) {
  var url = require('url');
  var q = url.parse(urlthis, true);
  var qdata = q.query; return qdata;

}

      class Ismyfile {

         ismyfileopen(file) {
           var Promise = require('promise');
           return new Promise((resolve, reject) => {
             const fs = require('fs')

             var readStream = fs.createReadStream(file);

             readStream.on('open', function () {
               resolves(true);
             });
           })

        }

      }




function question(question) {
    var readline = require('readline');

    const Promise = require('promise');

        var rl = readline.createInterface(

        process.stdin, process.stdout);

           return new Promise((data, err) => {

               rl.question(question , (answer) => {

               data(answer);

               });

           })

}



































///////////////////////*





























































var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const file = "database.json"
var express = require('express');
var path = require('path');


app.use(express.static(__dirname + ''));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/file.html'));
});



server.listen(8080);






/*
io.on('connection', function(socket) {

            console.log(socket);

           socket.emit('id', { number:value});

         });

*/

         io.on('connection', function(socket) {
             socket.on('createAcount', function(data) {

               createNewAcount(data);



             })})

             function createNewAcount(data) {

                  console.log(data);

               readFile(file).then((datafile, err)=> {


                datafile.acount[data.name] = {"password":data.password};

                writeFile(file, datafile);

            })
          }




          //is name in database
          io.on('isNotThisNameInDatabase', function(socket) {
              socket.on('createAcount', function(name) {


                       readFile(file).then((data, err) => {

                         console.log(data.acount[name]);

                          if (data.acount[name] === undefined) {

                            send(true, "canIWrite");

                          }
                          else {

                            send(false, "canIWrite");

                          }

                       })

              })})



              function send(value, parametr) {

                socket.emit('canIWrite', true);





              }
