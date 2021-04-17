const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
var Promise = require('promise');
const app = express()
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// MySQL
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'users'
})

// Get all beers

//deleteuser("user", "id", "14")




/*adddatabase("user", {

  id:44,
  username:"ahoj",
  tagline:44,
  desctription:"ahoj"

})*/
//changeuser("user", "username = ?", "id = 14", ["ahojahoj"]);






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
        connection.query(`DELETE FROM ${data} WHERE ${what} = ${value}`, [value], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.send(`Beer with the record ID ${[req.params.id]} has been removed.`)
            } else {
                console.log(err)
            }

            console.log('The data from beer table are: \n', rows)
        })
    })

}
//deleteuser("user", "id", "14")










get('user',"name", "ahojahoj").then((data) => {

  console.log(data);

})


/*get('user',"id", "14").then((data) => {

  console.log(data);

})*/
function get(data, what, value) {

  return new Promise((resolve, reject) => {

      pool.getConnection((err, connection) => {
          if(err) throw err
          console.log('connected as id ' + connection.threadId)
          connection.query(`SELECT * FROM ${data} WHERE ${what} = ${value}`,[value], (err, rows) => {
              connection.release() // return the connection to pool

              if (!err) {

                  resolve(rows)



              } else {
                  resolve(undefined)
              }

              // if(err) throw err
          })

      })

})

}


// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
