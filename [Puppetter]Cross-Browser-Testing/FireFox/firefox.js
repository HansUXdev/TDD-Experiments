const pptrFirefox = require('puppeteer-firefox');
 
const settings = {headless: false};

(async () => {
  const browser = await pptrFirefox.launch(settings);
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});
  page.catch(console.log(error))
  await browser.close();
})
();

// const browser = await puppeteer.launch();