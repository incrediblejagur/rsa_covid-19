const SARP_COVIDdata = require('../services/web-scraper/getFromSARP.js')()
const curveData = require('../services/data');
module.exports = () => {


    const latestCovidData = (req, res) => {
        res.json({
            SARP_COVIDdata
        })
    }
    
    const getCurveData = (req,res) => {
        res.json({
            curveData
        })
    }




    return{
        latestCovidData,
        getCurveData
    }
}