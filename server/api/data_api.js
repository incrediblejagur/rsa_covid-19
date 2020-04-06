const curveData = require('../services/data/allPastData');
module.exports = (getLatestStats,allCovidData) => {


    const latestCovidData = async (req, res) => {
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
            data: await allCovidData.getData(),
            status:'success'
        })
    }

    const addInitalDataset = async (req,res) => {
        await allCovidData.uploadData()
        res.json({
            status:'success'
        })
    }

    const getProvinceData = (req,res) => {
        res.json({
            data:allCovidData.casesByProvince()
        })
    }


    return{
        latestCovidData,
        getCurveData,
        getProvinceData,
        addInitalDataset
    }
}