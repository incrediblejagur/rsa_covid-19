import React from 'react';
import axios from 'axios';


export default class ExtraStats extends React.Component{
    state = {
        latestIncrease:'',
        latestAverage:'',
        lastChecked:''
    }
    componentDidMount = () => {
        axios.get('/api/extra-stats')
            .then((result) => {
                let data = result.data.data
                this.setState({
                    latestIncrease:data.latest_increase,
                    latestAverage:data.average_cases.latest_average,
                })
                
            })
            axios.get('/api/latest-stats')
            .then((result) => {
                let data = result.data.data
                this.setState({lastChecked:`${data[4].date} ${data[4].time}`})           
            })
        }

    render(){
        let {latestIncrease, latestAverage, lastChecked} = this.state;
        return(
              <div>
                            <div className=''>
                        <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Latest Increase</h5>
        <p className="card-text">{latestIncrease}&nbsp;</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Average Cases</h5>
        <p className="card-text">{latestAverage} per day&nbsp;</p>
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
                        <h5 className="card-title">Last Checked</h5>
        <p className="card-text">{lastChecked}&nbsp;</p>
                    </div>
                </div>
                </div>
                </div>
                        </div>
        )
    }
}