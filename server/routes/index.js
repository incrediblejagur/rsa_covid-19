module.exports = (app,data_api) => {
    
    app.get('/api/covid/latest', data_api.latestCovidData);
    app.get('/api/covid/all', data_api.getAllCovidData)
    app.get('/api/addData',data_api.addInitalDataset)
    app.get('/api/covid/province',data_api.getProvinceData)


    
}
