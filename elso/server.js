require('dotenv').config();
const express = require('express');
var mysql = require('mysql');

const app = express();
const port = process.env.PORT;

var pool  = mysql.createPool({
  connectionLimit : process.env.CONNECTIONLIMIT,
  host            : process.env.DBHOST,
  user            : process.env.DBUSER,
  password        : process.env.DBPASS,
  database        : process.env.DBNAME
});

// endpoint
app.get('/', function (req, res) {
  res.send(`API version : ${process.env.VERSION}`);
});

// user regisztráció 
app.post('/reg', function (req, res) {

  console.log(req.body)

});

// user belépés
app.post('/login', function (req, res) {});

// bejelentkezett felhasználó adatai
app.get('/me', function (req, res) {});

// GET /users - felhasználók listája
app.get('/users', function (req, res) {});


app.listen(port, () => {
  console.log(process.env) ;
  console.log(`Server listening on port ${port}...`);
});


/*
  stepcounter - users, stepdatas

  POST /reg - user regisztráció 
  POST /login - user belépés
  GET /me - bejelentkezett felhasználó adatai
  GET /users - felhasználók listája
  FETCH /users/:id 

  GET /steps
  GET /steps/:userID
  POST /steps/:userID
  FETCH /steps/:userID
  DELETE /steps/:userID

*/