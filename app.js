
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql')
var Promise = require('promise');

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

 console.log("connection");






socket.on('login', function(name, password) {


  console.log(password, name);



             get("user", "id", name).then((data) => {

               //console.log(data[0], "ahoj");

               if (data[0] === undefined) {

                 adddatabase("user", {

                   id:`${name}`,
                   password:`${password}`

                 });

                 console.log("you are loged true");

                 send("amILog", true)

               }
               else {

                        console.log("this acount has been loged before you");

                 send("amILog", false);

               }

             })





})





socket.on("delete", function (user) {

     checkpassword(user.name, user.password).then((data) => {

       console.log(data);

       if (data) {

         deleteuser("user", "id", user.name)

       }

     })

})





socket.on('prihlasit', function(name, password) {


         checkpassword(name, password).then((data) => {

           console.log(data);

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












          function send(inf, value) {

            socket.emit(inf, value);

          }






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

     get("user", "id", name).then((data) => {

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
                  console.log(`connected as id ${connection.threadId}`)



                  connection.query(`UPDATE ${data} SET ${value} WHERE ${equal}`, onwhat , (err, rows) => {
                      connection.release() // return the connection to pool

                      if(!err) {
                          console.log(`Beer with the name: ${rows} has been added.`)
                      } else {
                          console.log(err)
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
                      console.log("this has been add");
                  } else {
                      console.log(err)
                  }

                  console.log('The data from beer table are:11 \n', rows)

                  })
              })

          }
















          function deleteuser(data, what, value) {


              pool.getConnection((err, connection) => {
                  if(err) throw err
                  connection.query(`DELETE FROM ${data} WHERE ${what} = ?`, [value], (err, rows) => {
                      connection.release() // return the connection to pool
                      if (!err) {
                                        console.log("delete");
                      } else {
                          console.log(err)
                      }

                      console.log('The data from beer table are: \n', rows)
                  })
              })

          }
          //deleteuser("user", "id", "14")













          /*get('user',"id", "14").then((data) => {

            console.log(data);

          })*/
          function get(data, what, value) {

            return new Promise((resolve, reject) => {

                pool.getConnection((err, connection) => {
                    if(err) throw err
                    connection.query(`SELECT * FROM ${data} WHERE ${what} = ?`, [value],    (err, rows) => {
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
