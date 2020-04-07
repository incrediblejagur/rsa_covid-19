const neatCsv = require('neat-csv');
const axios = require('axios');
module.exports = (db) => {

    const getLatestStats = async () => {
        let collection = db.collection('latestData');
        let data = await collection.find().toArray()
        return data[data.length - 1].extractedData
    }

    const getAllCollectedData = async () => {
        let collection = db.collection('allData')
        let getAllDbData = await collection.find().toArray()
        let lastDatasetinDb = getAllDbData[getAllDbData.length - 1].data        
        return lastDatasetinDb //returns most up-to-date dataset
    }

    const getCovidProvincialData = async () => {
        let source = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv'
        return axios.get(source).then(async response => {
                let csvData = await neatCsv(response.data)
                return csvData
            })
    }


    return {
        getLatestStats,
        getAllCollectedData,
        getCovidProvincialData
    }
}