var express = require ('express');
var bodyParser = require('body-parser');

var path = require('path');

app = express();
app.use(function(req, res, next){
	console.log("Logging");
	next();
})
app.use(bodyParser.json());
app.get('/' , function(req, res){
	res.send('Server at port 3000');
})


app.listen(3000, function(){
	console.log('Server started on Port 3000...');
})

