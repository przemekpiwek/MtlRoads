import Head from "next/head";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import data from "../public/data.json";

import { FlyToInterpolator, NavigationControl } from "react-map-gl";

export default function Home() {
  const [viewport, setViewport] = React.useState({
    latitude: 45.5017,
    longitude: -73.5673,
    zoom: 10
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Montreal's Deadliest Roads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Map
          width={"100vw"}
          height={"100vh"}
          viewport={viewport}
          setViewport={setViewport}
        />
    </div>
  );
}
