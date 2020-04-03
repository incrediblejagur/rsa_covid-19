import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

export default class Home extends React.Component {
    state = {
        latest: [],
        curveData:[]
    }
    componentDidMount = () => {
        axios.get('/api/covid/latest')
            .then((result) => {
                let data = result.data.latestData
                this.setState({ latest:data })
            })
            axios.get('/api/covid/all')
            .then((result) => {
                let response = result.data.curveData                
                
                let labels = [];
                let stats = [];
                for(let z = 0; z < response.length;z++){
                    labels.push(response[z].date)
                    stats.push(response[z].cases)
                }
                let data = {
                    labels,
                    datasets: [
                      {
                        label: 'Total Cases Identified',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: stats
                      }
                    ]
                  };

                this.setState({ curveData:data })
            })
    }

    displayData = () => {
        let {latest} = this.state
        let div = [];
        for(let z = 0; z < latest.length; z++){
            div.push(
                <div className="card" style={{width: '18rem'}}>
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
        let {latest,curveData} = this.state;
        if(latest.length > 0){
        return (
            <div className="container">
                <div className="row centered">
                <div className="card-group" style={{marginTop:50}}>
                {this.displayData()}
                </div>
                </div>

                <div className="row" style={{marginTop:15}}>
                <Line data={curveData} />
                </div>
            
            </div>
        )
    }else{
        return <div></div>
    }
    }
}