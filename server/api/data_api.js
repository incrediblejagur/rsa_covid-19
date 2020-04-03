const curveData = require('../services/data');
module.exports = (latestData) => {


    const latestCovidData = async (req, res) => {
        res.json({
            latestData
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