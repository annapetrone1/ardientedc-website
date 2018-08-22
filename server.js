
const express = require('express');
// const MobileDetect = require('mobile-detect'),
const fs = require('fs');
const app = express();
const dateFormat = require('dateformat');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));



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

function shortDate(date){
  return dateFormat(date, 'yyyy-mm-dd');
}
function longDate(date){
  return dateFormat(date, 'fullDate');
}
app.get('/class/:id', (req, res) => {
  var p = req.params;
  console.log(`register for class ${p.id}`);
  var schedule = JSON.parse(fs.readFileSync(__dirname + '/data/schedule.json', 'utf8'));
  schedule = schedule[p.id];
  var dow = schedule.dow; // should be a single value
  var cancelled = schedule.cancelled;
  var loopday = new Date(); // get the next 4 weeks of classes

  var startHour = schedule['start-time'].split(':')[0];
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

  schedule['availableDates'] = datelist;
  schedule['id'] = p.id;
  res.render('register',schedule);

});

app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
  // open('http://localhost:' + config.port);
});
