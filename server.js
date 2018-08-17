
const express = require('express');
// const MobileDetect = require('mobile-detect'),

const app = express();

app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
  console.log('root');
  // todo: check if it's a mobile device or desktop
  // md = new MobileDetect(req.headers['user-agent']);
  //res.render('index');
  res.sendFile(__dirname+'/views/index.html');
});



app.get('/events', (req, res) => {
  console.log('root');
  // todo: check if it's a mobile device or desktop
  // md = new MobileDetect(req.headers['user-agent']);
  //res.render('index');
  res.sendFile(__dirname+'/views/events.html');
});

app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
  // open('http://localhost:' + config.port);
});
