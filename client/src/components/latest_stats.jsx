import React from 'react';
import axios from 'axios';


export default class LatestStats extends React.Component{
    state = {
        data:[]
    }
    componentDidMount = () => {
        axios.get('/api/latest-stats')
            .then((result) => {
                let data = result.data.data
                let values = [];
                for(let stats in data){
                    values.push(Object.values(data[stats])[0])
                }
               this.setState({data:values})
            })
        }


        render(){
            let { data } = this.state;
            return(
                <div className="card-group" style={{ marginTop: 50 }}>
                

                <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Tests Conducted</h5>
                            <p className="card-text">{data[0]}&nbsp;</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Positive Cases Identified</h5>
                            <p className="card-text">{data[1]}&nbsp;</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Recoveries</h5>
                            <p className="card-text">{data[2]}&nbsp;</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Deaths</h5>
                            <p className="card-text">{data[3]}&nbsp;</p>
                        </div>
                    </div>


                </div>
            )
        }


}