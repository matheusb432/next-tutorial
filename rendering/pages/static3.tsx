export function getStaticProps() {
  return {
    // ? Will rendder page again after 5 seconds with SSG
    revalidate: 5,
    props: {
      num: Math.random(),
    },
  };
}

export default function Static3(props: any) {
  return (
    <div>
      <h1>Static #03</h1>
      <h2>{props.num}</h2>
    </div>
  );
}
