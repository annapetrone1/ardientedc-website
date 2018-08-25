
const express = require('express');
// const MobileDetect = require('mobile-detect'),
const fs = require('fs');
const app = express();
const dateFormat = require('dateformat');
const uuidv1 = require('uuid/v1');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
  console.log('root');
  // todo: check if it's a mobile device or desktop
  // md = new MobileDetect(req.headers['user-agent']);
  // res.render('index');
  res.render('index');
});


app.get('/test', (req, res) => {
  res.render('test');
});

app.get('/events', (req, res) => {
  console.log('events');
  res.render('events');
});

app.get('/classes', (req, res) => {
  console.log('classes');
  // TODO: read from the schedule and make classes a template
  res.render('classes');
});

function shortDate(date){
  return dateFormat(date, 'yyyy-mm-dd');
}
function longDate(date){
  return dateFormat(date, 'fullDate');
}
app.get('/class/:id', (req, res) => {
  var p = req.params;
  console.log(`register for class ${p.id}`);
  var config = JSON.parse(fs.readFileSync(__dirname + '/data/schedule.json', 'utf8'));
  config = config[p.id];
  var dow = config.dow; // should be a single value
  var cancelled = config.cancelled;
  var loopday = new Date(); // get the next 4 weeks of classes

  var startHour = config['startTime'].split(':')[0];
  var datelist = [];
  if (loopday.getDay() == dow && loopday.getHours() >= startHour){
    // class is today and already started
    loopday.setDate(date.getDate() + i);
  }
  for (let i = 0; i <= 28; i += 1 ){
    if (loopday.getDay() == dow ) {
      datelist.push([shortDate(loopday), longDate(loopday), cancelled.indexOf(shortDate(loopday)) == -1 ? 0 : 1]);
    }
    loopday.setDate(loopday.getDate() + 1);
  }

  config['availableDates'] = datelist;
  config['id'] = p.id;
  config['startTimeFmt'] = dateFormat('2000-01-01 ' + config['startTime'],'hh:MM TT');
  config['orderid'] = uuidv1(); // generate a unique id for every visit to the reg page
  res.render('register',config);
  // res.json(config);
});

app.post('/class/:id/:orderid', (req, res)=>{
  console.log('NEW ORDER ALERT! PAYMENT SUCCESSFUL!!', req.params);

});
app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
  // open('http://localhost:' + config.port);
});
