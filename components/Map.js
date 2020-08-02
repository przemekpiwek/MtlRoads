import ReactMapGL from "react-map-gl";

import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import data from "../public/data.json";

  const layers = [
    new ScatterplotLayer({
      id: 'scatterplot-layer',
      data,
      filled: true,
      radiusScale: 30,
      radiusMinPixels: 1,
      radiusMaxPixels: 2,
      getPosition: data => [data.longitude, data.latitude],
      getFillColor: d => {
        if(d.deaths > 0){
          return [255,17,81]
      } else if(d.major_injuries > 0){
        return [255,69,0]
      } else if(d.minor_injuries > 0){
        return [255,255,0]
      }}
    }),
    new HeatmapLayer({
      id:"heatmap-layer",
      data: data,
      getPosition: data => [data.longitude,data.latitude],
      getWeight: data => data.deaths + (data.major_injuries * 0.5) + (data.minor_injuries * 0.25),
      radiusPixels: 10
    })
  ]



function Map({ width, height, viewport, setViewport }) {
  return (
    <ReactMapGL
    {...viewport}
      width={width}
      height={height}
      mapStyle="mapbox://styles/przemekp/ckddfi7im0quk1iqf0jui75m0"
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      onViewportChange = {(viewport) => {setViewport(viewport)}} >
      <DeckGL initialViewState={viewport} layers={layers} />
      </ReactMapGL>
  );
}

export default Map;
