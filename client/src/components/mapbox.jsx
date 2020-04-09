import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import React from 'react';


mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jcmVkaWJsZWphZ3VyIiwiYSI6ImNrN3VyeXVybzE1OWEzbG1ybHFkNWcxNzMifQ.AybXTKikwd-8lr8TdbVyJQ';

export default class MyMap extends React.Component{

  constructor(props: Props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {



    const map = new mapboxgl.Map({
      container: 'mymap',
      style: 'mapbox://styles/incrediblejagur/ck7xs2kdu00ot1ilpid6krvs7',
      center: [24.991639, -28.8166236],
      zoom: 4.9
    });
    map.scrollZoom.disable();
    map.dragPan.disable()

    var url = '/api/covid/geojson';
    map.on('load', function() {
        window.setInterval(function() {
            map.getSource('points').setData(url);
        }, 2000);

        map.addSource('points', { type: 'geojson', data: url });
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'points',
          'layout': {
              // get the icon name from the source's "icon" property
              // concatenate the name to get an icon from the style's sprite sheet
              // 'icon-image': ['concat', ['get', 'icon'], '-15'],
              // get the title name from the source's "title" property
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
              position: 'absolute',
              width: '100%',
              height: '100%',
              }}
        />
      </div>
    );
  }

}
