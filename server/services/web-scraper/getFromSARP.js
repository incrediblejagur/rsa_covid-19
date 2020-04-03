const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

module.exports = () => {
  let extractedData = [];
  //Data extracted from South African Resource Portal for COVID-19
const url = "https://sacoronavirus.co.za/"

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => {
    return page.goto(url, {waitUntil: 'networkidle2'}).then( async function () {
      return page.content();
    });
  })
  .then(html => {
    const $ = cheerio.load(html)
    const statsTable = $('.counter-box-container');
    statsTable.each(function () {
      const data_name = $(this).find('.counter-box-content').text();
      const data_value = $(this).find('.display-counter').attr('data-value');
      extractedData.push({
        [data_name]:data_value
      });
    });
  })
  return extractedData;
}