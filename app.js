const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("index.html");
});

app.listen(process.env.PORT, process.env.IP ,function(){
    console.log("express server is running");
});

app.get("/ddos", function(req, res){
   res.render("ddos.html");
});

app.get("/defcon", function(req, res) {
    res.render("defcon.html");
});

app.get("/rop", function(req, res) {
        res.render("rop.html");
});

app.get("/resources", function(req, res) {
        res.render("resources.html");
});
