import Head from "next/head";
import styles from "../styles/Home.module.css";
import DisplayAPI from "../components/Test";

export default function Home() {
  let test_key = process.env.API_KEY_TEST;
  console.log(test_key);
  setTimeout(() => {
    console.log({ test_key });
  }, 5000);
  return (
    <div className={styles.container}>
      <Head>
        <title>Montreal's Deadliest Roads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>{API}</div> */}
      {/* <DisplayAPI /> */}

      <div>API Key is: {test_key}</div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://.../posts");
//   const API = await res.json();

//   console.log("does this go in?");
//   return {
//     props: {
//       API,
//     },
//   };
// }
