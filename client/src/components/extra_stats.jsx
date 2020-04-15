import React from 'react';



export default class ExtraStats extends React.Component{

    render(){
        return(
              <div className='col-6' style={{marginTop:30}}>
                            <div className='row'>
                        <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Latest Increase</h5>
                        <p className="card-text">230</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Average Increase</h5>
                        <p className="card-text">230</p>
                    </div>
                </div>
                </div>
                </div>
                <div className='row'>
                        <div className="card-group" style={{ marginTop: 0 }}>
                        <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Days in Lockdown</h5>
                        <p className="card-text">#</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Last Updated</h5>
                        <p className="card-text">26/05/2020 14:45</p>
                    </div>
                </div>
                </div>
                </div>
                        </div>
        )
    }
}