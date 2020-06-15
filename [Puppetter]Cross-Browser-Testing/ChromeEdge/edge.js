const puppeteer = require('puppeteer-core');

const settings = {
  headless: false,
  executablePath: '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
};

(async () => {
  const browser = await puppeteer.launch(settings);
  const page = await browser.newPage();
  await page.goto('https://www.microsoftedgeinsider.com/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();