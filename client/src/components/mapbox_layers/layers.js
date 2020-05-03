import {colorArray,provinces } from './data';

const mapLayers = (map) => {
    for (let z = 0; z < provinces.length; z++) {
        var provinceGeoJSON = `https://mapit.code4sa.org/area/MDB:${provinces[z]}.geojson`;
            map.addSource(provinces[z], { type: 'geojson', data: provinceGeoJSON });
            map.addLayer({
                'id': provinces[z],
                'type': 'fill',
                'source': provinces[z],
                'paint': {
                    'fill-color': colorArray[z],
                    'fill-opacity': 0.8
                }
            });
    }
}

export default mapLayers;