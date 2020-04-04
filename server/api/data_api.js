const curveData = require('../services/data');
module.exports = (latestData,getLatestStats,dataset) => {


    const latestCovidData = async (req, res) => {
        await latestData.scrape()
        try{
        res.json({
            data:await getLatestStats.getLatest(),
            status:'success'
        })
    }catch(err){
        console.log(err.stack)
    }
    }
    
    const getCurveData = (req,res) => {
        res.json({
            curveData
        })
    }

    const addInitalDataset = async () => {
        await dataset.uploadData()
    }


    return{
        latestCovidData,
        getCurveData,
        addInitalDataset
    }
}