function DisplayAPI(props) {
  return <div>{props.API}</div>;
}

export async function getStaticProps() {
  console.log("in");
  const res = await fetch("/", {
    method: "POST",
  });
  const API = await res.json();

  console.log("does this go in?");
  console.log(API);
  return {
    props: {
      API,
    },
  };
}

export default DisplayAPI;
