const express = require("express");
var path = require("path");
//const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})

app.listen(3000, function() {
    console.log("Server is listening on port 3000.")
})