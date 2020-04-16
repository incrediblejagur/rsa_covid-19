const CovidData = require('./data_service');
const geoJSONOutline = require('./data/geojson_outline');
const covidData = CovidData();
module.exports = () => {

    const getData = async () => {
        let provinceData = await covidData.getCovidProvincialData()
        let province_data = provinceData[provinceData.length - 1]
        let result = geoJSONOutline
                let data = result.features
                for(let z = 0;z < data.length; z++){
                    for(short_code in province_data){
                    let mapBoxShortCode = data[z].properties.short_code
                    if(mapBoxShortCode === short_code){
                        data[z].properties.cases = Number(province_data[short_code])
                    }
                    }
                }
                return result
                //result  contains the updated data in a geoJson format
    }

    return {
        getData
    }
}