var express = require("express");
var app = express();
app.set("view engine", "pug");
app.use("/static", express.static("node_modules"));
app.use("/img", express.static("img"));

app.get("/", function(req, res){
	res.render("index");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/team", function(req, res){
	res.render("team");
});

app.get("/contact", function(req, res){
	res.render("contact");
});

app.listen(3000);