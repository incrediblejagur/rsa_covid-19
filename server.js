const express = require('express');
const cors = require('cors');
const middleware = require('./middleware')();
const Routes = require('./server/routes/index');
const Data_Api = require('./server/api/data_api');
const CovidDataService = require('./server/services/data_service');
const mongo = require('mongodb').MongoClient

require('dotenv').config();
const app = express();
app.use(cors());
// app.use(middleware.useSecureProtocol);
app.use(express.static('./client/build'));

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/covid19'
mongo.connect(uri, (err, db) => {
if (err) {
  console.error(err)
  return
}
let covidDataService = CovidDataService(db)
const data_api = Data_Api(covidDataService)
Routes(app,data_api)
})







let PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});