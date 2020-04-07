const express = require('express');
const Routes = require('./server/routes/index')
const Data_Api = require('./server/api/data_api')
const CovidData = require('./server/services/getLatestData');
const mongo = require('mongodb').MongoClient


const app = express();
app.use(require('express-status-monitor')())
app.use(express.static('./client/build'));

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/covid19'
mongo.connect(uri, (err, db) => {
if (err) {
  console.error(err)
  return
}
let covidData = CovidData(db)
const data_api = Data_Api(covidData)
Routes(app,data_api)
})







let PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});