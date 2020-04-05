const curveData = require('../services/data/allPastData');
module.exports = (saStats,getLatestStats,allCovidData) => {


    const latestCovidData = async (req, res) => {
        await saStats.scrape()
        try{
        res.json({
            data:await getLatestStats.getLatest(),
            status:'success'
        })
    }catch(err){
        console.log(err.stack)
    }
    }
    
    const getCurveData = async (req,res) => {
        res.json({
            curveData: await allCovidData.getData()
        })
    }

    const addInitalDataset = async (req,res) => {
        await allCovidData.uploadData()
        res.json({
            status:'success'
        })
    }


    return{
        latestCovidData,
        getCurveData,
        addInitalDataset
    }
}