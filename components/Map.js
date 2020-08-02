function Map({ width, height }) {
  return (
    <MapGL width={width} height={height} mapboxApiAccessToken={MAPBOX_TOKEN} />
  );
}

export default Map;
