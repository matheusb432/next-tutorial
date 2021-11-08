export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;

  // *  return numeroPar ? <span>{span.numero}</span> : null;
  return <div>{numeroPar ? <span>{props.numero}</span> : null}</div>;
}
