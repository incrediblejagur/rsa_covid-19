const express = require('express');
const cors = require('cors');
const Routes = require('./server/routes/index');
const Data_Api = require('./server/api/data_api');
const liveUserCounter = require('./server/services/liveUserCounter');
const CovidDataService = require('./server/services/data_service');
const mongo = require('mongodb').MongoClient
require('dotenv').config();

const app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

let PORT = process.env.PORT || 4000;
server.listen(PORT, function () {
  console.log('App starting on port', PORT);
});

liveUserCounter(io);
app.use(cors());
app.use(express.static('./client/build'));

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/covid19'
mongo.connect(uri, (err, db) => {
  if (err) {
    console.error(err)
    return
  }
  let covidDataService = CovidDataService(db)
  const data_api = Data_Api(covidDataService)
  Routes(app, data_api)
})







