var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home");
});

app.get("/mercury", function(req, res) {
   res.render("mercury"); 
});

app.get("/venus", function(req, res) {
   res.render("venus");
});

app.get("/earth", function(req, res) {
   res.render("earth");
});

app.get("*", function(req, res){
   //res.send("Page Not found"); 
   res.render("error");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is up and running"); 
});