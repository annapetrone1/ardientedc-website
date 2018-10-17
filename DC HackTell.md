# DC Hack && Tell 10/16/18

:wave: https://github.com/1littlevictory/ardientedc-website

## Background

Wanted to make a website for my dance team:

1. Increase visibility, show up on Google 
2. Have one place that lists our classes
3. Sell tickets for classes and events



## First design on Wix

https://annampetrone.wixsite.com/ardi2

- Free, "easy" to use GUI

- Thought it would be easier to create a professional look
- Thougt it would be easier to make mobile responsive using their UI
- Has a booking and ticket sales integration :arrow_left:

- Not free if you want a custom domain
- The drag and drop UI helped me try different designs faster than coding by hand
- But when I deployed it was extremely buggy, especially on mobile



## Get to hacking! 

So I decided to do the site by hand

http://ardientedance.com

- http://github.com/1littlevictory/ardientedc-website
- Simple HTML and JS static site
- Hosted on S3! It's so cheap!
  - http://ardientedance.com.s3-website-us-east-1.amazonaws.com/
- Had to copy/paste the nav and footer (instead of templating)... but it's 4 pages
- Did some clever hacking to make the class registration look like a GET request
  - https://github.com/1littlevictory/ardientedc-website/blob/master/public/js/classes.js
- s3 sync lets you sync a local directory to s3
  - https://s3.console.aws.amazon.com/s3/buckets/ardientedance.com/?region=us-east-1&tab=overview

- Actually had to learn css media queries
  - Desktop, giant desktop
  - mobile, sideways mobile
  - ipad but there's a bug
- Chrome on mobile scrolling issue: https://developers.google.com/web/updates/2016/12/url-bar-resizing
  - an absurd hack: https://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome

- Pay pal buttons are great!
  - to get started: https://www.paypal.com/merchant/tools 
  - to inject custom information into the form: https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/Appx_websitestandard_htmlvariables/#



