var express = require("express");
var app = express();
var path = require("path");

app.use(express.static('public'));
app.use(express.static('node_modules/codemirror'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
	//__dirname : It will resolve to your project folder.
});

app.listen(9001, function () {
	console.log('Example app listening on port itsover9000!');
});
