import React from 'react';
import axios from 'axios';


export default class ExtraStats extends React.Component{
    state = {
        latestIncrease:'',
        averageIncrease:'',
        lastUpdated:''
    }
    componentDidMount = () => {
        axios.get('/api/extra-info')
            .then((result) => {
                let data = result.data.data
                this.setState({
                    latestIncrease:data.latest_increase,
                    averageIncrease: data.average_increase
                })
                
            })
            axios.get('/api/latest-stats')
            .then((result) => {
                let data = result.data.data
                this.setState({lastUpdated:data[4].time})           
            })
        }

    render(){
        let {latestIncrease, averageIncrease, lastUpdated} = this.state;
        return(
              <div>
                            <div className=''>
                        <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Latest Increase</h5>
        <p className="card-text">{latestIncrease}</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Average Increase</h5>
        <p className="card-text">{averageIncrease}</p>
                    </div>
                </div>
                </div>
                </div>

                <div className=''>
                        <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">For more info</h5>
                        <p className="card-text"><a href="https://sacoronavirus.co.za/">sacoronavirus.co.za</a></p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Last Updated</h5>
        <p className="card-text">{lastUpdated}</p>
                    </div>
                </div>
                </div>
                </div>
                        </div>
        )
    }
}