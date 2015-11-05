var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "/public", file));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Meow");
});

module.exports = app;