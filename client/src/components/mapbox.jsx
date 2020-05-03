import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import React from 'react';
import mapLayers from './mapbox_layers/layers';

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jcmVkaWJsZWphZ3VyIiwiYSI6ImNrOTJwM2FsNzAyM2szbW9hdWR2OXBqZjUifQ.6H9790vEmqomFGSu0Q8M0g';

export default class MyMap extends React.Component{

  componentDidMount() {

    const map = new mapboxgl.Map({
      container: 'mymap',
      style: 'mapbox://styles/incrediblejagur/ck7xs2kdu00ot1ilpid6krvs7',
      center: [24.991639, -28.8166236],
      zoom: 4.0
    });
    map.scrollZoom.disable();
    map.dragPan.disable()

    var url = '/api/geojson';
    map.on('load', function() {
        mapLayers(map);

        map.addSource('points', { type: 'geojson', data: url });
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'points',
          'layout': {
              'text-field': ['get', 'cases'],
              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              'text-offset': [0, 0.0],
              'text-anchor': 'top'
          },
          paint: {
            "text-color": "#ffffff"
          }
                  });
    });
  }

  render() {

    return (
      <div>
        <div id='mymap' 
             style={{
               marginBottom:20,
              position: 'relative',
              width: '100%',
              height: '350px',
              borderRadius:5
              }}
        />
      </div>
    );
  }

}
