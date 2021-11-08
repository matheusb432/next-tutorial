export default function SomaUm(props) {
  // ! Causa erro pois props é readonly
  //* props.numero++
  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  );
}
