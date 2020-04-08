const axios = require('axios');
const CovidData = require('../getLatestData');
const covidData = CovidData();
// module.exports = () => {

    const update = async () => {
        let dataset_id = 'ck8mwy4c30im22tnofotat8sz'
        let token = 'pk.eyJ1IjoiaW5jcmVkaWJsZWphZ3VyIiwiYSI6ImNrN3VyeXVybzE1OWEzbG1ybHFkNWcxNzMifQ.AybXTKikwd-8lr8TdbVyJQ'
        let url = `https://api.mapbox.com/datasets/v1/incrediblejagur/${dataset_id}/features?access_token=${token}`
        let provinceData = await covidData.getCovidProvincialData()
        let province_data = provinceData[provinceData.length - 1]
        axios
            .get(url)
            .then(response => {
                let result = response
                let data = result.data.features
                for(let z = 0;z < data.length; z++){
                    for(short_code in province_data){
                    let mapBoxShortCode = data[z].properties.short_code
                    if(mapBoxShortCode === short_code){
                        data[z].properties.cases = Number(province_data[short_code])
                    }
                    }
                }
                //result  contains the updated data in a geoJson
            })


    }
update()

    // return {
    //     update
    // }
// }