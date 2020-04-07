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
