const puppeteer = require('puppeteer');

async function run () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.once('load', () => {
    console.log('Page loaded!');
  })

  await page.goto('https://www.qq.com/');
  await page.screenshot({ path: 'qq.png', fullPage: true });

  await browser.close()
}

run();