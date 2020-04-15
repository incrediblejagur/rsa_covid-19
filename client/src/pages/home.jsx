import React from 'react';
import MyMap from '../components/mapbox';
import LatestStats from '../components/latest_stats';
import ExtraStats from '../components/extra_stats';
import { CovidTimelineGraph, ProvinceGraph } from '../components/graphs';

export default class Home extends React.Component {

    render() {
        return (
            <div>


                <div className="container">

                    <div className="row centered">
                        <div className="col">
                            <LatestStats />
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: 15 }}>
                        <CovidTimelineGraph />
                    </div>
                    <div className="row" style={{ marginTop: 15 }}>
                        <div className='col-6'>
                            <ProvinceGraph />
                        </div>
                        <ExtraStats />
                    </div>

                </div>



                <div className="" style={{ marginTop: 15 }}>
                    <MyMap />
                </div>


            </div>
        )
    }
}