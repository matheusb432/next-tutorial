export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function StaticRender(props: any): JSX.Element {
  return (
    <div>
      <span>random: {props.numero}</span>
    </div>
  );
}
