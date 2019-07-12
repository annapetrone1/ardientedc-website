function getClassInfo(classId) {

  var classInfo = {

    'dcssa-tuesday': {
      full_name: 'Salsa on2 Levels 1-4 at DCSSA',
      shopping_cart_name: '',
      dow: 2,
      start_hour: 20,
      start_minute: 30,
      select_date: false,
      when: 'Tuesdays, 8:30 - 10:30 PM',
      location_name: 'DC Style Salsa Academy',
      location_address: '7014 West Moreland Ave, Takoma Park, MD 20912',
      location_google_maps: ' ',
      location_website: 'https://www.dcstylesalsa.com/',
      price: 'Pricing levels vary by membership type. Signle drop in class price is $25.',
      special_note: 'Registration available on the <a href="https://www.dcstylesalsa.com/registration" target="_blank">DC Style Salsa Academy</a> website.',
      instructor: 'David Cuevas',
      img:'classes-dcssa.jpg'
    },

    'salsa-progressives': {
      full_name: 'Salsa Dance Progressive Classes - Levels 1 and 2',
      shopping_cart_name: 'Salsa Dance Progressive Classes with David Cuevas',
      dow: 3,
      start_hour: 20,
      start_minute: 30,
      select_date: false,
      when: 'Wednesdays, Level 2 at 7:30 PM, Level 1 at 8:30 PM',
      location_name: 'Rendezvous Social Dance & Fitness Club',
      location_address: '11910 Parklawn Dr, Rockville, MD 20852',
      location_google_maps: 'https://goo.gl/maps/YFdMnHzhp582',
      location_website: 'http://www.dance911.com/',
      price: '$90 for one package, or $165 for two packages. One package includes 8 classes, which you can use for any of the level 1 or level 2 classes.',
      instructor: 'David Cuevas',
      img: 'classes-salsa-progressive.jpg',
      description: '',
      special_note: 'Contact <a href="http://www.dance911.com/" target="_blank">Rendezvous</a> to purchase class packages.'
    }
  };

  if (!classId) {
    // return info for all classes
    return classInfo;
  }
  if (!classInfo[classId]) {
    return;
  }
  var classPaypal = {

  };


  var finalInfo = classInfo[classId];
  var paypal_key = finalInfo.paypal_key;
  finalInfo['paypal_form'] = classPaypal[paypal_key];
  return finalInfo;
}

// console.log(Object.keys(getClassInfo('mambo-thursdays')));
/*
function cancelledDates(){
  var cancelled = [];
  for(let dt = new Date(2018,12,24); dt <= new Date(2019, 1, 3))
  return [

  ];
}
*/
