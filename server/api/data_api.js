const MapBoxService = require('../services/mapbox/mapbox');
module.exports = (covidData) => {


    const latestStatistics = async (req, res) => {
        try{
        res.json({
            data:await covidData.getLatestStats(),
            source:'scraped from sacoronavirus.co.za',
            status:'success'
        })
    }catch(err){
        console.log(err.stack)
    }
    }

    const collectedCovidState = async (req,res) => {
        try{
            res.json({
                data:await covidData.getAllCollectedData()
            })
        }catch(err){
            console.log(err.stack)
        }
    }

    const statsByProvince = (req,res) => {
        try{
            covidData.getCovidProvincialData().then(data =>{
                res.json({
                    data,
                    source:'https://github.com/dsfsi/covid19za',
                    status:'success'
                })
            })
        }catch(err){
            console.log(err.stack)
        }
    }

    const geoJSONdata = async (req,res) => {
        const mapbox = MapBoxService();
        res.json(await mapbox.update())
    }
    




    return{
        latestStatistics,
        collectedCovidState,
        statsByProvince,
        geoJSONdata
    }
}