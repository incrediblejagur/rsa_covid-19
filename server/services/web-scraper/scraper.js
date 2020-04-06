const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const moment = require('moment-timezone');

module.exports = (db) => {

  const scrape = async () => {
  const collectionA = db.collection('latestData');
  const collectionB = db.collection('allData');
  //Data extracted from South African Resource Portal for COVID-19
    let extractedData = [];
    const url = "https://sacoronavirus.co.za/"

    puppeteer
      .launch({args: ['--no-sandbox']})
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
        let dateByZone = moment().tz("Africa/Maseru").format()
        let dateOnly = dateByZone.split('T')[0]
        let formatedDate = dateOnly.replace('-','/').replace('-','/')
        extractedData.push({time:formatedDate})
        await collectionA.insertOne({extractedData})
        let getAllDbData = await collectionB.find().toArray()
        let lastDatasetinDb = getAllDbData[getAllDbData.length - 1].data
        let lastItemInDataset = lastDatasetinDb[lastDatasetinDb.length - 1]
        if(lastItemInDataset.cases !== Number(Object.values(extractedData[1]))){
          let newDataToAdd ={
            date:extractedData[4].time,
            cases:Number(Object.values(extractedData[1])),
            recoveries:Number(Object.values(extractedData[2])),
            deaths:Number(Object.values(extractedData[3]))
          }
          lastDatasetinDb.push(newDataToAdd)
          await collectionB.insertOne({data:lastDatasetinDb})
          // console.log('data is different')
        }else{
          // console.log('data is the same')
        }
        
      })
    }
    return{
      scrape
    }
    // return extractedData;
}