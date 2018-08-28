
const express = require('express');
// const MobileDetect = require('mobile-detect'),
const fs = require('fs');
var app = express();
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  console.log('root');
  // todo: check if it's a mobile device or desktop
  // md = new MobileDetect(req.headers['user-agent']);
  // res.render('index');
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/views/test.html');
});

app.get('/events', (req, res) => {
  console.log('events');
  res.sendFile(__dirname + '/views/events.html');
});

app.get('/classes', (req, res) => {
  console.log('classes');
  // TODO: read from the schedule and make classes a template
  res.sendFile(__dirname + '/views/classes.html');
});


app.get('/register', (req, res) => {
  var p = req.params;
  console.log(`register for class ${p.id}`);


  res.sendFile(__dirname + '/views/register-mambo-thursdays.html');
  // res.json(config);
});


app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
  // open('http://localhost:' + config.port);
});
