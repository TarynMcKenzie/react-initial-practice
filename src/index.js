// const http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200);
//   response.write('<h1>Hello Node!!!!</h1>\n');
//   response.end();
// }).listen(3000);
// console.log('Server running at http://localhost:3000');


import express from 'express';
const app = express();

app.get('/', function(req, res){
    res.send('Hello Worl!!');
});

app.listen(3000, function (){
    console.log('Example app listening on port 3000')
})
