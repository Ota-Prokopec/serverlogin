
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql')
var Promise = require('promise');
const url = require("url")

// create sql
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'users'
})



/*link to javascript*/
app.use(express.static(__dirname + ''));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/file.html'));
});


/*user body to parse code*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





server.listen(8080);


let waitforgetdata;
let waitforpasname;

/*connect*/





io.on('connection', function(socket) {

 ////console.log("connection");






socket.on('login', function(name, password) {


  ////console.log(password, name);



             get("user", "id = ?", name).then((data) => {

               //////console.log(data[0], "ahoj");

               if (data[0] === undefined) {

                 adddatabase("user", {

                   id:`${name}`,
                   password:`${password}`

                 });

                 ////console.log("you are loged true");

                 send("amILog", true)

               }
               else {

                        ////console.log("this acount has been loged before you");

                 send("amILog", false);

               }

             })





})





socket.on("delete", function (user) {

     checkpassword(user.name, user.password).then((data) => {

       ////console.log(data);

       if (data) {

         deleteuser("user", "id", user.name)

         send("isdelete", true)

       }
       else {
         send("isdelete", false)
       }


     })

})





socket.on('prihlasit', function(name, password) {


         checkpassword(name, password).then((data) => {

           ////console.log(data);

           if (data !== false) {


             send("password == true",  {name:data[0].id, password:data[0].password});

           }
           else {
             send("password == true",  false);
           }

         })

          })





          socket.on("dataquestion", function (data) {

                 createQuestion(data);

          })





                     // get score
                     socket.on("score", function (data) {

                       checkpassword(data.kdo, data.password).then((password) => {

                         if (password) {
                           adddatabase("answer", {

                             kdo:data.kdo,
                             komu:data.komu,
                             hodnota:data.i,
                             jmenoslozky:data.file,
                             otazka:data.question

                           })
                         }

                       })



                     })






          function send(inf, value) {

            socket.emit(inf, value);

          }














//show score





  socket.on("score", (data) => {

    checkpassword(data.name, data.password).then((password) => {

      if (password) {

        get("answer", "komu = ?", [data.name]).then((userdata) => {





          send("answerOutput", userdata)

        })

      }

    })

  })






socket.on("share", (data) => {

  checkpassword(data.name, data.password).then((password, e) => {



    if (password) {

      get("data", "name = ?", [data.name]).then((share) => {

        console.log(share);

        send("fullDatabseForShare", share)

      })

    }

  })

})















                                                       //first char big letter
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


//note//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//complite question
function completequestion(name, id, username) {

  let canIDoQuiz = true;

  //console.log(name, id, username);

  get("answer", "komu = ?", [name]).then((udelal) => {


    for (let pos = 0; pos < udelal.length; pos ++) {



      if (udelal[pos].kdo === username && udelal[pos].jmenoslozky === id) {
        canIDoQuiz = false;
        //return;
      }



    }

    //console.log(udelal);

    if (canIDoQuiz) {

      get("data", "name = ?", [name]).then((data) => {

        for (let pos = 0; pos < data.length; pos ++) {


          if (data[pos].nameOfQuestion === id) {

            console.log(data);


            if (data === undefined) {
              console.log(1);
              send("completequestion", false);
            }
            else {
              console.log(2);
              send("completequestion", data[pos])
            }


          }

        }




      })

    }
    else {

      console.log(3);
      send("completequestion", "youAlreadyDidThis")
    }

  })



}
  socket.on("hash", function (data) {
    var q = url.parse(data.u, true);
    var qdata = q.query;

    ////console.log(qdata.id,"ahoj");

    checkpassword(data.name, data.password).then((password) => {

          if (password) {

            if (qdata.name !== undefined || qdata.id !== undefined) {

              ////console.log("ahoj");

              completequestion(qdata.name, qdata.id, data.name);

            }

          }
          else {
            send("password", false)
          }



    })




  })

















          })




function convertascii(string) {

  let slovo = "";
  for (let pos = 0; pos < string.length; pos ++) {

    slovo += string.charCodeAt(pos);

  }

  return slovo;

}










function checkpassword(name, password) {

   return new Promise((resolve, reject) => {

     get("user", "id = ?", [name]).then((data) => {

       if (data[0].password === password) {

         resolve(data)

       }
       else {

         resolve(false)

       }

     })

   })



}
























          function zalozitnovyucet(name, password) {

            adddatabase("user", {name:name, password:password});

          }










function createQuestion(data) {


      checkpassword(data.name, data.password).then((passwordname) => {

        if (passwordname) {

          adddatabase("data", {

            name:data.name,
            img0:data.img0,
            question:data.question,
            answer0:data.answer0,
            answer1:data.answer1,
            side:data.side,
            img1:data.img1,
            nameOfQuestion:data.nameOfQuestion

          });

        }

      })



}































































          //////////////////////////////////////
          function changeuser(data,value, equal, onwhat) {

            //value = name = ?, tagline = ?, description = ?, image = ?  what change                      string
            //data = database                                                                             string
            //equal = id = "ahoj"      what user                                                          string
            //onwhat = change for what ju[name, tagline, description, image, id]                          array

            pool.getConnection((err, connection) => {
                  if(err) throw err
                  ////console.log(`connected as id ${connection.threadId}`)



                  connection.query(`UPDATE ${data} SET ${value} WHERE ${equal}`, onwhat , (err, rows) => {
                      connection.release() // return the connection to pool

                      if(!err) {
                          ////console.log(`Beer with the name: ${rows} has been added.`)
                      } else {
                          ////console.log(err)
                      }

                  })

              })

          }


          function adddatabase(data, value) {

            //value = id
            //data = databaseof


              pool.getConnection((err, connection) => {
                  if(err) throw err

                  const params = value
                  connection.query(`INSERT INTO ${data} SET ?`, params, (err, rows) => {
                  connection.release() // return the connection to pool
                  if (!err) {
                      ////console.log("this has been add");
                  } else {
                      ////console.log(err)
                  }

                  ////console.log('The data from beer table are:11 \n', rows)

                  })
              })

          }
















          function deleteuser(data, what, value) {


              pool.getConnection((err, connection) => {
                  if(err) throw err
                  connection.query(`DELETE FROM ${data} WHERE ${what} = ?`, [value], (err, rows) => {
                      connection.release() // return the connection to pool
                      if (!err) {
                                        ////console.log("delete");
                      } else {
                          ////console.log(err)
                      }

                      ////console.log('The data from beer table are: \n', rows)
                  })
              })

          }
          //deleteuser("user", "id", "14")













          /*get('user',"id", "14").then((data) => {

            ////console.log(data);

          })*/
          function get(data, what, value) {

            return new Promise((resolve, reject) => {

                pool.getConnection((err, connection) => {
                    if(err) throw err
                    connection.query(`SELECT * FROM ${data} WHERE ${what}`, value,    (err, rows) => {
                        connection.release() // return the connection to pool

                        if (!err) {

                          if (rows !== undefined) {

                            resolve(rows)

                          }
                          else {

                            resolve(undefined);

                          }


                        } else {
                            resolve(false)
                        }

                        // if(err) throw err
                    })

                })

          })

          }
