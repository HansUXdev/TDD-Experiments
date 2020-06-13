const puppeteer = require('puppeteer');

(async () => {
  const datadir = '/tmp/profile/';
  const browser = await puppeteer.launch({
      // Ask puppeteer to run Chrome Canary
      executablePath: './Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
      headless: false,
      userDataDir: datadir,
  });

  // Create a new incognito browser context.
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  // const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  // await page.screenshot({ path: 'example.png', fullPage: true });
  // await browser.close();

})();