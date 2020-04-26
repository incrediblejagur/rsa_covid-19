import React from 'react';

export default class LatestStats extends React.Component {

    render() {
        let { data } = this.props;
        return (
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