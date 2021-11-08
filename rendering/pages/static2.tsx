export function getStaticProps() {
  return {
    props: {
      num: Math.random(),
    },
  };
}

export default function Static2(props: any) {
  return (
    <div>
      <h1>Static #02</h1>
      <h2>{props.num}</h2>
    </div>
  );
}
