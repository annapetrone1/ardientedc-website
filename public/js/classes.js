function getClassInfo(classId) {

  var classInfo = {
    'mambo-thursdays': {
      full_name: 'Mambo on2 Thursday Workshop Series',
      shopping_cart_name: 'Mambo on2 Thursday Workshop Series with Ardiente',
      dow: 4,
      start_hour: 20,
      start_minute: 0,
      select_date: true,
      when: 'Thursdays, 8:00 PM',
      location_name: 'The Dancing Club',
      location_address: 'D, 5050 Nicholson Ln, Rockville, MD 20852',
      location_google_maps: 'https://goo.gl/maps/MUmCv8khCr72',
      location_website: 'https://www.facebook.com/pages/The-Dancing-Club/1050924848338732',
      price: '$12',
      instructor: 'David Cuevas',
      img: 'classes-mambo-thursdays.jpg',
      paypal_key: 'mambo-thursdays',
      description: `Catch us at The Dancing Club every Thursday from 8-9pm, with instructor David Cuevas teaching Mambo, ChaCha, Fusion and much more! Classes will vary so make sure you follow us to stay updated.
      <br>We will cover: Basic Fundamentals, Footwork, Timing, Styling, Lead & Follow technique, Spins, and much more! This is an open level class so everyone is welcomed!`
    },

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
    'mambo-thursdays': `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> \
      <input type="hidden" name="cmd" value="_s-xclick"> \
      <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
  "> \
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> \
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"> \
      </form>`
  };


  var finalInfo = classInfo[classId];
  var paypal_key = finalInfo.paypal_key;
  finalInfo['paypal_form'] = classPaypal[paypal_key];
  return finalInfo;
}

// console.log(Object.keys(getClassInfo('mambo-thursdays')));
