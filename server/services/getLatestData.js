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

    const getLatestIncrease = async () => {
        let collection = db.collection('latestData');
        let data = await collection.find().toArray()
        let latest = data[data.length - 1].extractedData
        let beforeLatest = data[data.length - 2].extractedData
        let latestIncrease = Number(Object.values(latest[1])) - Number(Object.values(beforeLatest[1]))
        return latestIncrease
    }

    const getAverageIncrease = async () => {
        let collection = db.collection('latestData');
        let data = await collection.find().toArray()
        let allDifferences = [];
        for(let z = 0; z < data.length - 1; z++){
            let t1 = data[z].extractedData
            let t2 = data[z + 1].extractedData
           let diff = Number(Object.values(t2[1])) - Number(Object.values(t1[1]))
           allDifferences.push((diff))
        }
        let average = allDifferences.reduce((a, b) => a + b, 0) / data.length
        return average
    }


    return {
        getLatestStats,
        getAllCollectedData,
        getCovidProvincialData,
        getLatestIncrease,
        getAverageIncrease
    }
}