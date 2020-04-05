const dataset = require('./data/allPastData');
const provinceData = require('./data/casesByProvince');
module.exports = (db) => {
    const uploadData = async () => {
        //just for initial upload of data, just runs once
        let collection = db.collection('allData')
        let doesDataExist = await collection.find().toArray()
        if (doesDataExist.length > 0) {
            console.log('already exists')
            return;
        } else {
            await collection.insertOne({ data:dataset })
        }
    }

    const getData = async () => {
        let collection = db.collection('allData')
        let getAllDbData = await collection.find().toArray()
        let lastDatasetinDb = getAllDbData[getAllDbData.length - 1].data        
        return lastDatasetinDb //returns most up-to-date dataset
    }

    const casesByProvince = () => {
        return provinceData;
    }
    return {
        uploadData,
        getData,
        casesByProvince
    }
}
