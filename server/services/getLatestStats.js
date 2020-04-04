module.exports = (db) => {
    const collection = db.collection('latestData');

    const getLatest = async () => {
        let data = await collection.find().toArray()
          return data[data.length-1].extractedData
}




    return{
        getLatest
    }
}