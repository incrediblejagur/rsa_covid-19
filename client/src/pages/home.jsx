import React from 'react';
import MyMap from '../components/mapbox';
import LatestStats from '../components/latest_stats';
import ExtraStats from '../components/extra_stats';
import { CovidTimelineGraph, ProvinceGraph } from '../components/graphs';
import Footer from '../components/footer';

export default class Home extends React.Component {

    render() {
        return (
            <div>


                <div className="container">

                    <div className="row centered">
                        <div className="mycards col-sm">
                            <LatestStats />
                        </div>
                    </div>
                    <div className="row centered" style={{ marginTop: 15 }}>
                        <div className="col-sm">
                        <CovidTimelineGraph />
                        </div>
                    </div>
                    <div className="row centered" style={{ marginTop: 15 }}>
                        <div className='col-sm'>
                            <ProvinceGraph />
                        </div>
                        <div className='mycards extrainfo col-sm centered' style={{marginTop:30}}>
                        <ExtraStats />
                    </div>
                    </div>

                </div>



                <div className="" style={{ marginTop: 15 }}>
                    <MyMap />
                </div>

            <Footer />
            </div>
        )
    }
}