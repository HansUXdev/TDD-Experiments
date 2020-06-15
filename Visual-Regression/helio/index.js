const puppeteer = require('puppeteer');
fs = require('fs');

// Utility
const LOG = console.log;
const delay = async (time) => await new Promise(res => setTimeout(res, time));

//
require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const username   = process.env.USERNAME;
const password   = process.env.PASSWORD;
// LOG(username, password)

const firefoxOptions = {
  product: 'firefox',
  extraPrefsFirefox: {
    // Enable additional Firefox logging from its protocol implementation
    // 'remote.log.level': 'Trace',
  },
  // Make browser logs visible
  dumpio: true,
};



const settings = {
  // args: [`--proxy-server=http=${randProxy}`, "--incognito"],
  timeout: 0, 
  headless: false, 
  devtools: false,
  // Open with Chrome Browser
  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // userDataDir: '/Users/user/Library/Application Support/Google/Chrome/Profile 4/',
  defaultViewport: {
    width: 1080,
    height: 800,
    deviceScaleFactor: 1,
  }
};

/**
 * 1. Automate Login
 * 2. Screenshots
 */


  (async () => {
    const browser = await puppeteer.launch(settings);
    const page = await browser.newPage();
    // log simple progress of the page.evaluate to the console
    page.on('console', consoleObj => console.log(consoleObj.text()));

    /**
     * Write the browser's console.log to a file.
     */
    page.on('console', async (consoleObj) => {  
      // const fullLogs = await consoleObj.text();
      console.log('START LOG \n');
      fs.writeFile('./logs/login.txt', consoleObj.text(), function (err) {
        if (err) return console.log(err);
        console.log('\n\n DONE with LOG');
      });
    });
    
    

  

    await page.goto('https://my.helio.app/login');
    await page.screenshot({path: './screenshots/login.png'});
  
    
      // Get the "viewport" of the page, as reported by the page.
    // const dimensions = await page.evaluate(() => {
    //   return {
    //     width: document.documentElement.clientWidth,
    //     height: document.documentElement.clientHeight,
    //     deviceScaleFactor: window.devicePixelRatio
    //   };
    // });
  
    // console.log('Dimensions:', dimensions);
  
    // Sign in 
      // Type into search box.
      await page.type('input#email', username);
      await page.type('input[type="password"]', password);
      
      
      // Wait for suggest overlay to appear and click "show all results".
      const allResultsSelector = '.button.expanded.signin-button.ng-binding';
      await page.waitForSelector(allResultsSelector);
      await page.click(allResultsSelector);
      delay(20000);
      // const allResultsSelector = '.button.expanded.signin-button.ng-binding';
      // await page.waitForSelector(allResultsSelector);
      await page.screenshot({path: './screenshots/loggedIn.png'});
    // 
    // await browser.close();
  })();






