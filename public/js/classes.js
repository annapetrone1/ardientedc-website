function getClassInfo(classId) {

  var classInfo = {
    'beginner-intensives':{
      full_name: '6-Week Beginner Salsa on2 Intensives',
      paypal_key: 'beginner-intensives',
      shopping_cart_name: '6-Week Beginner Salsa on2 Intensives',
      dow: 1,
      start_hour: 19,
      start_minute: 0,
      select_date: false,
      when: 'Mondays, 7 - 8 PM, starting October 7th',
      location_name: 'The Dancing Club',
      location_address: '5050 Nicholson Ln D, Rockville MD 20852',
      location_google_maps: 'https://goo.gl/maps/ASxNzHnA3Jac4Fwd7',
      location_website: '',
      price: '$85 before Oct 1 / $100 after Oct 1. Single class drop-in $20.',
      special_note: '',
      instructor: 'David Cuevas',
      img:'beginner-intensives.png',
      description: '<p>David Cuevas will be teaching a 6-week beginner salsa on2 class starting October 7th!</p>  <p>We\'ll cover timing, technique, weight transfer, turns, social dancing, shines, and partner work.</p>      <p>If you are looking to transition from on1 to on2, learn salsa on2 fundamentals, or practice social dancing, this is for YOU!</p><br> '
    },
    /* <h3>We will be working on</h3> <p><ul style="display: inline; margin: 0 auto"> <li>Timing</li> <li>Proper weight transfer</li> <li>Technique</li> <li>Social Dancing</li> <li>Turns</li> <li>Shines</li> <li>Partner-work</li> </ul>*/

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
      location_google_maps: 'https://goo.gl/maps/uNdDbhGXgrQ2iACS9',
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
    'beginner-intensives': ''
  };

  oct1 = new Date('2019-10-02'); // give people the full day on 10/1 to get the discount
  today = new Date();
  if (today <= oct1){
    classPaypal['beginner-intensives'] = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<table>
<tr><td><input type="hidden" name="on0" value="Pass type"></td></tr><tr><td><select name="os0">
	<option value="6-week full pass">6-week full pass $85.00 USD</option>
	<option value="Single drop-in">Single drop-in $20.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;
  } else {
    classPaypal['beginner-intensives'] = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<table>
<tr><td><input type="hidden" name="on0" value="Pass type"></td></tr><tr><td><select name="os0">
	<option value="6-week full pass">6-week full pass $100.00 USD</option>
	<option value="Single drop-in">Single drop-in $20.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;
  }

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
