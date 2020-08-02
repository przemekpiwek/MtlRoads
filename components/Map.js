import ReactMapGL, { FlyToInterpolator, NavigationControl } from "react-map-gl";

function Map({ width, height, viewport, setViewport, viewportHandler }) {
  return (
    <ReactMapGL
    {...viewport}
      width={width}
      height={height}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      onViewportChange = {(viewport) => {setViewport(viewport)}}
    />
  );
}

export default Map;
