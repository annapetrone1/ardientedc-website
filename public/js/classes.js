function getClassInfo(classId){

  var classInfo = {
    'mambo-thursdays': {
      full_name: 'Mambo on2 Thursday Workshop Series',
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
      price_units: 'per class',
      instructor: 'David Cuevas',
      img:'classes-mambo-thursdays.jpg',
      paypal_key: 'mambo-thursdays',
      description: `<p>Catch us at <i>The Dancing Club</i> every Thursday from 8-9pm, with instructor David Cuevas teaching Mambo, ChaCha, Fusion and much more! Classes will vary so make sure you follow us to stay updated. </p>
      <p>We will cover: Basic Fundamentals, Footwork, Timing, Styling, Lead & Follow technique, Spins, and much more! This is an open level class so everyone is welcomed!</p>`
    },

    'salsa-progressive-1': {
      full_name: 'Salsa Dance Progressive Classes - Level 1',
      dow: 3,
      start_hour: 20,
      start_minute: 30,
      select_date: false,
      when: 'Wednesdays, 8:30 PM',
      location_name: 'Rendezvous Social Dance & Fitness Club',
      location_address: '11910 Parklawn Dr, Rockville, MD 20852',
      location_google_maps: 'https://goo.gl/maps/YFdMnHzhp582',
      location_website: 'http://www.dance911.com/',
      price: '$90 for one package, or $165 for two packages.',
      instructor: 'David Cuevas',
      img:'classes-salsa-progressive.jpg',
      paypal_key: 'salsa-progressive',
      description: 'TODO: needs description',
      special_note: 'One package includes _ classes, which can be used for any combination of level 1 or 2 classes.'
    },

    'salsa-progressive-2': {
      full_name: 'Salsa Dance Progressive Classes - Level 2',
      dow: 3,
      start_hour: 19,
      start_minute: 30,
      select_date: false,
      when: 'Wednesdays, 7:30 PM',
      location_name: 'Rendezvous Social Dance & Fitness Club',
      location_address: '11910 Parklawn Dr, Rockville, MD 20852',
      location_google_maps: 'https://goo.gl/maps/YFdMnHzhp582',
      location_website: 'http://www.dance911.com/',
      price: '$90 for one package, or $165 for two packages.',
      instructor: 'David Cuevas',
      img:'classes-salsa-progressive.jpg',
      paypal_key: 'salsa-progressive',
      description: 'TODO: needs description',
      special_note: 'One package includes _ classes, which can be used for any combination of level 1 or 2 classes.'
    }
  };

  if (!classId){
    // return info for all classes
    return classInfo;
  }
  var classPaypal = {
    'mambo-thursdays':
      `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> \
      <input type="hidden" name="cmd" value="_s-xclick"> \
      <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
  "> \
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> \
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"> \
      </form>`,

    'salsa-progressive': `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <table>
    <tr><td><input type="hidden" name="on0" value="Select number of Packages">Select number of Packages</td></tr><tr><td><select name="os0">
    	<option value="1 package">1 package $90.00 USD</option>
    	<option value="2 packages">2 packages $165.00 USD</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHyQYJKoZIhvcNAQcEoIIHujCCB7YCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBJ26Ifv9dhGC0h34Iq731T190gFoESETSyak08XPk9qwqm8E2kAKEmLKdxRY+LDmI6wP9xP0FY3Pz5kw/YFMscUC9bPxTQjvqOkfecE+KHJNskF47JObCwWndgyliVnIWc9wqDUAvKxI/3TU6AQvelgLAJIWCaVVns9puckI/SCzELMAkGBSsOAwIaBQAwggFFBgkqhkiG9w0BBwEwFAYIKoZIhvcNAwcECGdIs07Yf3edgIIBIMgKXUJgV2CIPEK+ZRlj3ELGRX7BrLrivIn9yFEFMRpViiFYD1gtPuUM16BScU6Jy+THHlN2BGOCziFDsVZXPpy2TlKG2TB/aMDEjjbc+Jzr+1nmXtAbExjaayduG98AColJDvF54PIFJ08ahI/4idwx4NMWoLWO3JPfvxdBlh1VNcR+glZXzxOgb6dfPKg1vgZd1OaPJG77/IYlAPVDWJ8epjFQ/bRVrM8V8fdiBocIv6IK4JpEpy0sxOY/jpFPgPC8wFE44Yzd6dSZNDY/Ko1yflTltOlgAkyuHOIzefpJBJ2KzcVMmjfiq7UOMry+1tpX06lrmhkejzOoZZOVIPBZUU2MJ68dmS8/ArniPz8pSJw9s81CMGK9AdWr6Hr5VKCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE4MDkwOTE3MzEzOVowIwYJKoZIhvcNAQkEMRYEFME8xZwfjkLVsg0vn9TrvP3f8r7ZMA0GCSqGSIb3DQEBAQUABIGANdTnsRTqeNW5Js6gq6EwOizvUPpcq9+RryuMXMllRCp7A4r9jRRiBhN84Ca2cyQ6iKOXER913RfoVhTcfX2nO4P3eZLXiB4lTKdtWnsUhT6DInGOKystqMr1jY+m6Vbn3skMLlb3xmo7+IC+tlBj5SnI571v19Znf90GOCVdj84=-----END PKCS7-----
  ">
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
