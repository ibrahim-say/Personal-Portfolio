import React from 'react'
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Map() {
    const defaultProps = {
        center: {
          lat: 26.8206,
          lng: 30.8205,
        },
        zoom: 2,
      };
  return (
    <div
        style={{ height: "400px", width: "100%", overflow: "hidden" }}
        className="mt-3 rounded-4 border"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAs17kjm61VmZjDJ8-Bh1kZc8x9ex8ef1c" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          
        >
                <AnyReactComponent
          lat={26.8206}
          lng={30.8205}
          text="Egypt"
        />
     
        </GoogleMapReact>
      </div>
  )
}

export default Map