function get_anniv19_forms(promo){
  var NO_PROMO = {
    night_passes: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick">
				<table>
				<tr><td><input type="hidden" name="on0" value="Pass type"></td></tr><tr><td><select name="os0">
					<option value="Workshop + Social">Workshop + Social $25.00 USD</option>
					<option value="Social only">Social only $20.00 USD</option>
				</select> </td></tr>
				</table>
				<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
				</form>
			`,

		  bootcamp: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick">
				<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
				</form>
				`,

		  fullpass: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick">
				<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
				<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
				</form>
				`,

    prices: ['$20-25', '$60', '$75'],
    description: ''
  };

  if (!promo){
    return NO_PROMO;
  }

  HS = {
    bootcamp: NO_PROMO.bootcamp,
    fullpass: NO_PROMO.fullpass,
    prices: ['$18', '$60', '$75'],
    description: 'MCPS Night Pass Discount'
  };

  HS['night_passes'] = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_xclick">
    <input type="hidden" name="business" value="ardientedc@gmail.com">
    <input type="hidden" name="lc" value="US">
    <input type="hidden" name="item_name" value="Ardiente 3rd Anniversary: Workshop + Social MCPS discount">
    <input type="hidden" name="amount" value="18.00">
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="button_subtype" value="services">
    <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
    `;

  FULLPASS_15PCT = {
    night_passes: NO_PROMO.night_passes,
    bootcamp: NO_PROMO.bootcamp
  };
  FULLPASS_15PCT.description = '15% off Full Pass';
  FULLPASS_15PCT.prices = ['$20-25', '$60', '$63.75'];
  FULLPASS_15PCT.fullpass = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>`;



  FIVE_OFF = {};
  FIVE_OFF.description = 'Take $5 off any pass';
  FIVE_OFF.prices = ['$15-20', '$55', '$70'];
  FIVE_OFF['night_passes'] = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<table>
<tr><td><input type="hidden" name="on0" value="Pass type"></td></tr><tr><td><select name="os0">
	<option value="Workshops + Social">Workshops + Social $20.00 USD</option>
	<option value="Social only">Social only $15.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;

  FIVE_OFF['bootcamp'] = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;

  FIVE_OFF['fullpass'] = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHiAYJKoZIhvcNAQcEoIIHeTCCB3UCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAdCJ4/+gzMdXHwiXkYo2aTs86YJmUkXvGm6E/vP5okzTGdl64dUPAKyh9cpjKVEb+J7ezMYrDi6GhCI9WRoJFVmTji25eYEfJgNSW5fg3MGnEawq+sjkiBD6PieIc2RN3KdxHhOlRe2JqcTU1HYwVIAkTmuL7dJhO2TQmqqAsmyzELMAkGBSsOAwIaBQAwggEEBgkqhkiG9w0BBwEwFAYIKoZIhvcNAwcECLWqf41TnJ67gIHgqZWnewRXHQO9IDwAz4JY1nvVbYKF3xvmAhuHRDkzBLWCNJldjFYzvDYsK3sA/OSVZGEpRyjg1JVJ5uqvH0XMLR18sMUzUzXegB5rgySYkXWCjc/otSdE4/Gsv4wOCyNoXjo14+Ep5K2BrcPlB9pcIkcSFqL4el/i2zjUUcbmKvq8oiB+llAJ+v0GZRwSGgnl6QLLny49o+0su1lJqIILty+niwyfZO+qo/hTHxpeA2NuyFlcAo+Cc8uES5mjhg2c9f4f7pQrQtRMA0p66BeQmuC/hSb6oXeuuimW5bghZfmgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xOTA2MDgwMDQwMTVaMCMGCSqGSIb3DQEJBDEWBBTkpIiBLor3g7yA6Vl18Z+knJeWPTANBgkqhkiG9w0BAQEFAASBgHhGWUT7Irdd8v9PlbyX+bqCZQ/ETKADkkQSPGcsc4Kxl4fMwL3X65xrQdPFDWhFq770fpXLCmqoEITlkovtib26y0Vy5oI7qooCjU8aJHX9sX+HL4yuBUGO/8/x0AAM27+HWDDp64TrZfTrPzSy9Q1zLDertCCLB57iyzIV22hf-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`;


  promo_hash_lookup = {
    '30181d65686d00b3328c1b51114bb255': {},
    'b1f0f373433e08d06edacbe0b6eb9caf': {},
    '1b23ef6383005d2914522f757b7a4b8d': {},
    '5b2b9907666dbe75069f6743cd0ed43a': {}
  };


  promo_hash = md5(promo);
  if (promo_hash in promo_hash_lookup){
    return promo_hash_lookup[promo_hash];
  } else {
    // they typed something but it wasn't a promo code
    return NO_PROMO;
  }


}