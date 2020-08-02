import MapGL from "react-map-gl";

function Map({ width, height, MAPBOX_TOKEN }) {
  return (
    <MapGL width={width} height={height} mapboxApiAccessToken={MAPBOX_TOKEN} />
  );
}

export default Map;
