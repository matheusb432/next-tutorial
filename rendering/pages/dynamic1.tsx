// ? Will run in prod (npm run start) every time a request to this page is made.
export function getServerSideProps() {
  console.log('[Server] getting dynamic rand num');
  return {
    props: {
      num: Math.random(),
    },
  };
}

export default function Dynamic1(props: any) {
  return (
    <div>
      <h1>Dynamic #01</h1>
      <h2>{props.num}</h2>
    </div>
  );
}
