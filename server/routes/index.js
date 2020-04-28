module.exports = (app,data_api) => {
    
    app.get('/api/latest-stats', data_api.latestStatistics);    
    app.get('/api/extra-stats', data_api.extraCovidStats);
    app.get('/api/province-stats', data_api.statsByProvince);
    app.get('/api/all-stats',data_api.collectedCovidState);
    app.get('/api/geojson',data_api.geoJSONdata);

    //old route, used by some peoples apps still
    app.get('/api/covid/all', data_api.collectedCovidState);

    app.get('/*', (req,res) => {
        res.redirect('https://github.com/incrediblejagur/rsa_covid-19#api')
    });

    
}
