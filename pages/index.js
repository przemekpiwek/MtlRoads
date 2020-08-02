import Head from "next/head";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";

export default function Home() {
  let x = "token";

  return (
    <div className={styles.container}>
      <Head>
        <title>Montreal's Deadliest Roads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map width={"100vw"} height={"100vh"} MAPBOX_TOKEN={x} />
    </div>
  );
}
