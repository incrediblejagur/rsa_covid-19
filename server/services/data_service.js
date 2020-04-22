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
        let collection = db.collection('allData');
        let data = await collection.find().toArray()
        let latestDataset = data[data.length - 1]
        let theData = latestDataset.data
        let latestIncrease = theData[theData.length -1].cases - theData[theData.length -2].cases
        return latestIncrease
    }

    const getAverageCases = async () => {
        let collection = db.collection('allData');
        let data = await collection.find().toArray()
        let latestDataset = data[data.length - 1]
        let theData = latestDataset.data
      const findAverage = (dayAgo) =>  {  //dayAgo - 1 being latest
        let allDifferences = [];
        for(let z = 0; z < theData.length - dayAgo; z++){
            let t1 = theData[z].cases
            let t2 = theData[z + 1].cases
           let diff = t2 - t1
           allDifferences.push((diff))
        }
        let average = Number(allDifferences.reduce((a, b) => a + b, 0) / allDifferences.length).toFixed(2)
        return average
    }
        let yesterday_average = findAverage(2)
        let latest_average = findAverage(1)
        return {latest_average, yesterday_average}
    }


    return {
        getLatestStats,
        getAllCollectedData,
        getCovidProvincialData,
        getLatestIncrease,
        getAverageCases
    }
}
