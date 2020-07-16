const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;
const server = http.createServer(app);


server.listen(port, function () {
  console.log('Example app listening on port',
    port);
});


/*
var pg = require('pg');
var conString = "postgres://postgres:gh12rqb9@localhost:5432/adViz";
var client = new pg.Client(conString);
client.connect();

client.query('SELECT * FROM nutzer', (err, res) => {
  console.log(err, res);
  client.end();
});
*/
