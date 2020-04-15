module.exports = (app,data_api) => {
    
    app.get('/api/latest-stats', data_api.latestStatistics);
    app.get('/api/extra-info', data_api.extraCovidInfo)
    app.get('/api/province-stats', data_api.statsByProvince)
    app.get('/api/all-stats',data_api.collectedCovidState)
    app.get('/api/geojson',data_api.geoJSONdata)


    
}
