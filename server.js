const express = require('express');
const Routes = require('./server/routes/index')
const Data_Api = require('./server/api/data_api')
const WebScraper = require('./server/services/web-scraper/scraper')




const app = express();

app.use(express.static('./client/build'));



let webScraper = WebScraper()
const data_api = Data_Api(webScraper)
Routes(app,data_api)




let PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});