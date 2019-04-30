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
      price: '$15',
      instructor: 'David Cuevas',
      img: 'logo-color-medium.gif',
      description: 'Instructor David Cuevas teaches footwork and partnerwork technique to improve your dancing. This class is part of Ardiente intensive training. All intermediate level dancers are welcome to attend for the first hour, 8 - 9 PM on Thursdays.'
    },

    'thursday-workshop-intensive': {
      paypal_key: 'thursday-workshop-intensive',
      full_name: 'Ardiente Intensive Training Course (Monthy Pass)',
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
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`,

    'thursday-workshop-intensive': `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHbwYJKoZIhvcNAQcEoIIHYDCCB1wCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYB8Gd/7shrP1QPSuJundHGCpTChsabYrO9poFE5w+HiaNXTEHauncnhFVDwlBpOUHXLsnziB9gK71sruw81Fl1sg6/RoKWdpX+ZOvTnfHT6zxsRs8RpNNLkUcGDBaVkzYfWjoEsHwAPAbsvUlOjRi3mhBqvvWEV6KsV4R5WSVVFNDELMAkGBSsOAwIaBQAwgewGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQINfVANEx7VESAgcjKStCPvn1JtQhhzPpSXoyGI8P6XkCFHm24KCSst3EMvnmGIYwpjs2m/oqenjx9KPIURM8xvgYJw5HDqaeANgynugGd60e7mEtpyF1LaBeKtstozypp3aNzbJvfF6z0YZg34T9akXrQvF6VF9FkefEKXPifnvEzqUTbPIF08h20k2RSMDKDV9R+ctSxb+pR9JdgtoJ+4dhQdrThJrr0JsbQb9L0eH8Ay5wo9zNs5die+OChtdCr8KL1uIeDz51csonJenw50LSlVKCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE4MTEwODAyMzkwMVowIwYJKoZIhvcNAQkEMRYEFJOFHUJIZ0OJSqU1RHbb1unE0XYVMA0GCSqGSIb3DQEBAQUABIGAIcWSx9qCYGSxsNZWkBflS0wjk/QkjZbo4Wy2gcy2Q9QD54utjVeAJLsvEmWD3SeTMQG+0SVZS86EtBPX6+JNja/joQDj+U3bT9ZeDALf/zYbztOta3GCKB3oTPbrZsdxOi28p+TEpE+VdZf4cknspVjbdUZ3oflrNMcaI5fXryk=-----END PKCS7-----">
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
/*
function cancelledDates(){
  var cancelled = [];
  for(let dt = new Date(2018,12,24); dt <= new Date(2019, 1, 3))
  return [

  ];
}
*/
