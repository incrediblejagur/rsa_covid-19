import React from 'react';
import {colorArray,provinces } from './mapbox_layers/data';

export default class MapKey extends React.Component{

    buildKey = () => {
        let keys = [<div className="mapkeys">Provinces</div>];
        for(let z = 0; z < provinces.length;z++){
            let provinceCode = provinces[z]
            if(provinceCode === 'GT') provinceCode = 'GP'
            if(provinceCode === 'LIM') provinceCode = 'LP'
        let map_key = <div className="mapkeys"><span className="key" style={{"backgroundColor": colorArray[z]}}></span>{provinceCode}</div>
        keys.push(map_key)    
    }
    return keys;
    }

    render(){
        return(
            <div id="" className="legend">
            {this.buildKey()}
            </div>

        )
    }

}
