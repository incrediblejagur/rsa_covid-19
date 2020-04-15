import React from 'react';
import axios from 'axios';


export default class LatestStats extends React.Component{
    state = {
        latest:''
    }
    componentDidMount = () => {
        axios.get('/api/latest-stats')
            .then((result) => {
                let data = result.data.data
                data.pop()
                this.setState({ latest: data })
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
                            <p className="card-text">{Object.values(latest[z])}</p>
                        </div>
                    </div>
                )
            }
            return div
        }

        render(){
            return(
                <div className="card-group" style={{ marginTop: 50 }}>
                {this.displayData()}</div>
            )
        }


}