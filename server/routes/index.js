module.exports = (app,data_api) => {
    
    app.get('/api/covid/latest', data_api.latestStatistics);
    app.get('/api/covid/province', data_api.statsByProvince)
    app.get('/api/covid/all',data_api.collectedCovidState)
    // app.get('/api/covid/province',data_api.getProvinceData)


    
}
