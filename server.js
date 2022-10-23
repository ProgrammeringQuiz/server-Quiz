var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors')

app.use(cors())

// Endpoint to Get a list of questions
app.get('/getQuestions', function(req, res){
    fs.readFile(__dirname + "/json/" + "quizData.json", 'utf8', function(err, data){
        console.log(data);
        res.json(JSON.parse(data));
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})