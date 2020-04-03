module.exports = (app,data_api) => {

    app.get('/api/covid/latest', data_api.latestCovidData);
    app.get('/api/covid/all', data_api.getCurveData)



    
}