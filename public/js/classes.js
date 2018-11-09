function getClassInfo(classId) {

  var classInfo = {
    'thursday-workshop-dropin': {
      paypal_key: 'thursday-workshop-dropin',
      full_name: 'Salsa on2 Workshops (Drop-In)',
      dow: 4,
      start_hour: 20,
      start_minute: 0,
      select_date: true,
      when: 'Thursdays, 8:00 PM',
      location_name: 'The Dancing Club',
      location_address: 'D, 5050 Nicholson Ln, Rockville, MD 20852',
      location_google_maps: 'https://goo.gl/maps/MUmCv8khCr72',
      location_website: 'https://www.facebook.com/pages/The-Dancing-Club/1050924848338732',
      price: '$20',
      instructor: 'David Cuevas',
      img: 'logo-color-medium.gif',
      description: 'Instructor David Cuevas teaches footwork and partnerwork technique to improve your dancing. This class is part of Ardiente intensive training. All intermediate level dancers are welcome to attend for the first hour, 8 - 9 PM on Thursdays.'
    },

    'thursday-workshop-intensive': {
      paypal_key: 'thursday-workshop-intensive',
      full_name: 'Ardiente Intensive Training Course (Monthly Pass)',
      dow: 4,
      start_hour: 20,
      start_minute: 0,
      select_date: false,
      when: 'Thursdays, 8 - 9:30 PM',
      location_name: 'The Dancing Club',
      location_address: 'D, 5050 Nicholson Ln, Rockville, MD 20852',
      location_google_maps: 'https://goo.gl/maps/MUmCv8khCr72',
      location_website: 'https://www.facebook.com/pages/The-Dancing-Club/1050924848338732',
      price: '$55',
      instructor: 'David Cuevas',
      img: 'logo-color-medium.gif',
      description: 'Intensive training by Ardiente. One package includes four classes, Thursdays from 8 - 9:30 PM.'
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
    'thursday-workshop-dropin': `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHVwYJKoZIhvcNAQcEoIIHSDCCB0QCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBr01X+k52c2iz/n0riNEVxsOvibW17tq0jM3KEwa5KUIMexGfPN7HG3DRZctrBMs+T0DGms/hkyqpcFSC1zd9xttEEDI0hovaYyFmdKuy2nCFZGv8CT2cKfRgx5f9ecpZ69+z/doB3wRyXhEaRvFYE9nXqa7UEx7WEmdrv66+KqTELMAkGBSsOAwIaBQAwgdQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIsmWSQFkt/iyAgbDwMrrZApxkO/JzVcPL1fRBEqGlAGtbN9ZNXnl1E5o8mtcuIbRS9urloEK2BSdAuUj1BPXKurIEXAw3aiK4aNyQZizqtFaeEPn2nP1c2KV7ESLlQqVPoiOhI+wfR3da2MgCbc54Q7hYcske2O5/zF9hwKKR+0h1YpU5krg045rbbTmBfVAAKDl2RuvaUpjFCSLHmZAU5DHSHos/0QfcBMkqcl81+tQJtYWuYCQ8VdcLAqCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE4MTEwODAyMzc0NVowIwYJKoZIhvcNAQkEMRYEFJ5NNHL0upRFtinQxUcfZjJgLgGlMA0GCSqGSIb3DQEBAQUABIGAZ0d5wouLKs4n1LLNDOYUNDybdCx8ILYjeFX0mddzQU9YeP8bGaN3tYQiP/7tJ23E04K+MXIoEwDwmm5p6Oxjiy8qGhRBb/xOilsKHb0LwgerAUU5kUgfo/Jx9DldqIaPauvv2zBC02LPJnZo1YnELlgWd4hVrwqg9IkHFOYCm28=-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`,

    'thursday-workshop-intensive': `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`
  };


  var finalInfo = classInfo[classId];
  var paypal_key = finalInfo.paypal_key;
  finalInfo['paypal_form'] = classPaypal[paypal_key];
  return finalInfo;
}

// console.log(Object.keys(getClassInfo('mambo-thursdays')));
