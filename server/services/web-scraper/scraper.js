const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const moment = require('moment-timezone');

module.exports = (db) => {

  const scrape = async () => {
  const collection = db.collection('latestData');
  //Data extracted from South African Resource Portal for COVID-19
    let extractedData = [];
    const url = "https://sacoronavirus.co.za/"

    puppeteer
      .launch()
      .then(browser => browser.newPage())
      .then(page => {
        return page.goto(url, { waitUntil: 'networkidle2' }).then(async function () {
          return page.content();
        });
      })
      .then(async (html) => {
        const $ = cheerio.load(html)
        const statsTable = $('.counter-box-container');
        statsTable.each(function () {
          const data_name = $(this).find('.counter-box-content').text();
          const data_value = $(this).find('.display-counter').attr('data-value');
          extractedData.push({
            [data_name]: data_value
          });
        });
        extractedData.push({time:moment().tz("Africa/Maseru").format()})
        await collection.insertOne({extractedData})
      })
    }
    return{
      scrape
    }
    // return extractedData;
}