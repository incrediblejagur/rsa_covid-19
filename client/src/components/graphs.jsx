import React from 'react';
import axios from 'axios';
import dataset from '../components/dataset';
import { Line, Bar } from 'react-chartjs-2';


export class CovidTimelineGraph extends React.Component{
    state = {
        data:false,
        latestData:false
    }
    componentDidMount = () => {
        axios.get('/api/covid/latest')
        .then((result) => {
            let data = result.data.data
            data.pop()
            console.log(data[1])
            this.setState({ latestData: data })
        })
        axios.get('/api/covid/all')
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
                let data = {
                    labels,
                    datasets: dataset.covidLineGraph(cases, recoveries, deaths)
                };

                this.setState({ data })
            })
    }
render(){
    let { data,latestData } = this.state
    if(data && latestData){
    return(
        <Line data={data}
            options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: Math.ceil((Number(Object.values(latestData[1])) * 2.5) / 100) * 100
                        }
                    }]
                }
            }}
        />
    )
        }else{ return <div></div>}
}
}

export class ProvinceGraph extends React.Component{
    state = {
        data:''
    }
    componentDidMount = () =>{
        axios.get('/api/covid/province')
        .then((result) => {
            let response = result.data.data
            let res = response[response.length -1]
            let labels = [];
            let casesInProvince = [];
            for(let province in res){
                if(province.length === 2){
                labels.push(province)
                casesInProvince.push(res[province])
                }
            }
            let data = {
                labels,
                datasets: dataset.covidBarGraph(casesInProvince)
            };
            this.setState({ data })
        })
    }

    render(){
        let {data} = this.state;
        if(data !== ''){
        return(
            <Bar
            data={data}
            width={100}
            height={50}
            options={{
                // maintainAspectRatio: false
            }}
        />
        )
        }else{ return <div></div>}
    }

}