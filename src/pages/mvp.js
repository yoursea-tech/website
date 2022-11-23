import * as React from "react";
import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MVPPage = () => {

    const [data, setData] = useState([])
  
    useEffect(() => {
        async function load(){
            let data = await fetch('aoi_test.geojson')
            data = await data.json()
            console.log(data)
            data = data.features.map(e => ({coord: [e.geometry.coordinates[0][1], e.geometry.coordinates[0][0]], color: e.properties.color}))
            setData(data)
        }
        load()
    }, [])
  
    return (
    <div className="vh-100">
      <MapContainer
        center={[41.9, 12.29]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution="&copy; Google Maps"
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {
            data.map( (e,i) => (<Circle radius={10} center={e.coord} key={`marker-${i}`} className={e.color}></Circle>))
        }
      </MapContainer>
    </div>
  );
};

export default MVPPage;
