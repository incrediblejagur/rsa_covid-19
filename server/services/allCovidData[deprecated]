// const dataset = require('./data/allPastData');
// const provinceData = require('./data/casesByProvince');
// const neatCsv = require('neat-csv');
// const axios = require('axios');

// module.exports = (db) => {
//     const uploadData = async () => {
//         //just for initial upload of data, just runs once
//         let collection = db.collection('allData')
//         let doesDataExist = await collection.find().toArray()
//         if (doesDataExist.length > 0) {
//             console.log('already exists')
//             return;
//         } else {
//             await collection.insertOne({ data:dataset })
//         }
//     }

//     const getAllCaseData = async () => {
//         let source = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv'
//         axios.get(source)
//              .then(async response => {
//                  let csvData = await neatCsv(response.data)
                
//                 })
//     }

//     const casesByProvince = () => {     
//     }
//     return {
//         uploadData,
//         getAllCaseData,
//         casesByProvince
//     }
// }
