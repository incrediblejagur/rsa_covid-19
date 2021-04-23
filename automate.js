const WebScraper = require('./server/services/web-scraper/scraper')
const mongo = require('mongodb').MongoClient
//runs this script once a day
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/covid19'
mongo.connect(uri, async (err, db) => {
if (err) {
  console.error(err)
  return
}
let webScraper = WebScraper(db);
await webScraper.scrape();
setTimeout(() => { process.exit() }, 20000);
})