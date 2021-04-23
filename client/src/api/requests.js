import axios from 'axios';
import datasets from '../components/dataset';
let lastChecked = {};
 const apiRequests =  {

    latestStats(){
   return axios.get('/api/latest-stats')
        .then((result) => {
            let data = result.data.data
            let values = [];
            for (let stats in data) {
                values.push(Object.values(data[stats])[0])
            }
            lastChecked = `${data[5].time} ${data[5].date}`
            return values;
        })
    },

    extraStats(){
      return axios.get('/api/extra-stats')
            .then((result) => {
                let data = result.data.data
               return {
                    latestIncrease:data.latest_increase,
                    latestAverage:data.average_cases.latest_average,
                    lastChecked
                }
                
            })

    },

    allStats(){
       return axios.get('/api/all-stats')
            .then((result) => {
                let response = result.data.data

                let labels = [];
                let cases = [];
                let recoveries = [];
                let deaths = [];
                for (let z = 0; z < response.length; z++) {
                    labels.push(response[z].date)
                    cases.push(response[z].cases)
                    recoveries.push(response[z].recoveries)
                    deaths.push(response[z].deaths)
                }
                let dataset = {
                    labels,
                    datasets: datasets.covidLineGraph(cases, recoveries, deaths)
                };

                return {dataset,cases}
                // this.setState({ data, cases })
            })
    },

    provinceStats(){
       return axios.get('/api/province-stats')
        .then((result) => {
            let response = result.data.data
            let res = response[response.length -1]
            let labels = [];
            let casesInProvince = [];
            for(let province in res){
                if(province.length === 2 || province.length === 3 ){
                labels.push(province)
                casesInProvince.push(res[province])
                }
            }
            let dataset = {
                labels,
                datasets: datasets.covidBarGraph(casesInProvince)
            };
            return dataset;
        })
    }
    
}

export default apiRequests;