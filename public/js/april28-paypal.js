function get_price_info(num_people, num_classes){

  var one_person_one_class = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Just me - 1 class">
  <input type="hidden" name="amount" value="15.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;


  var one_person_two_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Just me - 2 classes">
  <input type="hidden" name="amount" value="30.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  var one_person_three_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Just me - 3 classes">
  <input type="hidden" name="amount" value="45.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  var one_person_four_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Just Me - Four classes">
  <input type="hidden" name="amount" value="60.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  var one_person_full_pass = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Just me - Full pass">
  <input type="hidden" name="amount" value="60.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  two_people_one_class = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + a friend - SIngle class">
  <input type="hidden" name="amount" value="24.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  two_people_two_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + a friend - Two classes">
  <input type="hidden" name="amount" value="48.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  two_people_three_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + a friend - Three classes">
  <input type="hidden" name="amount" value="72.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  two_people_four_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + a friend - Four classes">
  <input type="hidden" name="amount" value="96.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  two_people_full_pass = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + a friend - Full pass">
  <input type="hidden" name="amount" value="110.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  three_people_one_class = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + 2 friends - One class">
  <input type="hidden" name="amount" value="30.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;
  three_people_two_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + 2 friends - Two class">
  <input type="hidden" name="amount" value="60.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  three_people_three_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + 2 friends - Three class">
  <input type="hidden" name="amount" value="90.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  three_people_four_classes = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + 2 friends - Four class">
  <input type="hidden" name="amount" value="120.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  three_people_full_pass = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="ardientedc@gmail.com">
  <input type="hidden" name="lc" value="US">
  <input type="hidden" name="item_name" value="Me + 2 friends - Full pass">
  <input type="hidden" name="amount" value="150.00">
  <input type="hidden" name="currency_code" value="USD">
  <input type="hidden" name="button_subtype" value="services">
  <input type="hidden" name="no_note" value="0">
  <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
  `;

  lookup_html = [
    [one_person_one_class, one_person_two_classes, one_person_three_classes, one_person_four_classes, one_person_full_pass],
    [two_people_one_class, two_people_two_classes, two_people_three_classes, two_people_four_classes, two_people_full_pass],
    [three_people_one_class, three_people_two_classes, three_people_three_classes, three_people_four_classes, three_people_full_pass]
  ];

  lookup_unit_price = [15, 12, 10];
  lookup_fullpass_price = [60, 55, 50];

  unit_price = num_classes == 5 ? lookup_fullpass_price[num_people - 1] : lookup_unit_price[num_people - 1];
  price_description = num_classes == 5 ? `$${unit_price} / full pass` : `$${unit_price} / individual class`;
  price_total = num_classes == 5 ? unit_price * num_people : unit_price * num_people * num_classes;

  return {
    button_html: lookup_html[num_people - 1][num_classes - 1],
    price_description: price_description,
    price_total: `$${price_total}`
  };
}
