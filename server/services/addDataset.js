const getData = require('./data');
module.exports = (db) => {

    const uploadData = async() => {
    let collection = db.collection('allData')
    let doesDataExist = await collection.find().toArray()
    if(doesDataExist.length > 0){
        console.log('already exists')
        return;
    }else{
    await collection.insertOne({getData})
    }
    }
    return{
        uploadData
    }
}
