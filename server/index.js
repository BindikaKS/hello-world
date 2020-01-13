var express = require('express')
var app = express();


app.get('/', function (req, res) {
    res.send('Hello World')
  });

let port = 9012;
  app.listen(9012,()=>{
      console.log("Server is running on Port : ",port);
  });