import React from 'react';
import MyMap from '../components/mapbox';
import LatestStats from '../components/latest_stats';
import ExtraStats from '../components/extra_stats';
import { CovidTimelineGraph, ProvinceGraph } from '../components/graphs';
import Footer from '../components/footer';
import MapKey from '../components/map_key';

export default class Home extends React.Component {

    render() {
        return (
            <div>


                <div className="container">

                    <div className="row centered">
                        <div className="mycards col-sm">
                            <LatestStats data={this.props.latest}/>
                            <code style={{fontSize:"10px"}}>Data scraped from sacoronavirus.co.za (Scraper is automated and run's 3 times a day)</code>
                        </div>
                    </div>
                    {/* Graph disabled because past data is not reliable */}
                    {/* <div className="row centered" style={{ marginTop: 15 }}>
                        <div className="col-sm">
                        <CovidTimelineGraph data={this.props.allStats}/>
                        </div>
                    </div> */} 
                    <div className="row centered" style={{ marginTop: 15 }}>
                        <div className='col-sm'>
                            <ProvinceGraph data={this.props.provinceStats}/>
                        <code style={{fontSize:"10px"}}>Provincial data provided by (2019-nCoV Data Repository for SA) <a href="https://github.com/dsfsi/covid19za">github.com/dsfsi/covid19za</a></code>
                        </div>
                        <div className='mycards extrainfo col-sm centered' style={{marginTop:30}}>
                        <ExtraStats data={this.props.extraStats} />
                    </div>
                    </div>

                </div>



                <div className="" style={{ marginTop: 20 }}>
                    <MyMap />
                    <MapKey />
                </div>

            <Footer />
            </div>
        )
    }
}