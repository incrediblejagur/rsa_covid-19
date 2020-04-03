const express = require('express');
const Routes = require('./server/routes/index')
const Data_Api = require('./server/api/data_api')




const app = express();

const data_api = Data_Api()
 
Routes(app,data_api)




let PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});