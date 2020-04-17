import React from 'react';
import axios from 'axios';
import dataset from '../components/dataset';
import { Line, Bar } from 'react-chartjs-2';


export class CovidTimelineGraph extends React.Component{
    state = {
        data: '',
        cases:[]
    }
    componentDidMount = () => {
        axios.get('/api/all-stats')
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

                this.setState({ data, cases })
            })
    }
render(){
    let { data,cases } = this.state
    return(
        <article className="canvas-container">
        <Line data={data}
            options={{
                maintainAspectRatio:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: Math.ceil((cases[cases.length - 1] * 2.5) / 100) * 100
                        }
                    }]
                }
            }}
        />
        </article>
    )
}
}

export class ProvinceGraph extends React.Component{
    state = {
        data:''
    }
    componentDidMount = () =>{
        axios.get('/api/province-stats')
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