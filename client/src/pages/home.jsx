import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import MyMap from '../components/mapbox';
import dataset from '../components/dataset';

export default class Home extends React.Component {
    state = {
        latest: [],
        curveData: []
    }
    componentDidMount = () => {
        axios.get('/api/covid/latest')
            .then((result) => {
                let data = result.data.data
                data.pop()
                this.setState({ latest: data })
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
                    datasets: dataset.returnData(cases, recoveries, deaths)
                };

                this.setState({ curveData: data })
            })
    }

    displayData = () => {
        let { latest } = this.state
        let div = [];
        for (let z = 0; z < latest.length; z++) {
            div.push(
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{Object.keys(latest[z])}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">{Object.values(latest[z])}</p>
                        {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div>
            )
        }
        return div
    }






    render() {
        let { latest, curveData } = this.state;
        if (latest.length > 0) {
            return (
                    <div className="container">

                        <div className="row centered">
                            <div className="col">
                                <div className="card-group" style={{ marginTop: 50 }}>
                                    {this.displayData()}
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: 15 }}>
                            <div className="col">
                                <Line data={curveData}
                                    options={{
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true,
                                                    max: Math.ceil((Number(Object.values(latest[1])) * 2.5) / 100) * 100
                                                }
                                            }]
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: 15 }}>
                                <MyMap />
                        </div>

                    </div>
            )
        } else {
            return <div><MyMap /></div>
        }
    }
}