import Head from "next/head";
import styles from "../styles/Home.module.css";
import Map from "../components/Map";


export default function Home() {
  const [viewport, setViewport] = React.useState({
    latitude: 45.4900,
    longitude: -73.6000,
    zoom: 12,
    pitch:30,
    bearing:0
  });


  return (
    <>
      <Head>
        <title>Montreal's Deadliest Roads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Map
          width={"100vw"}
          height={"100vh"}
          viewport={viewport}
          setViewport={setViewport}
        />
</div>
  </>
  );
}
