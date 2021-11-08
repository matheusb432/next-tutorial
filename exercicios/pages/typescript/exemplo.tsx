import Pessoa from '../../components/Pessoa';

export default function exemplo() {
  return (
    <div>
      <Pessoa nome="Tobias" idade={21} />
      <hr />
      <Pessoa nome="Algo" idade={28} altura={1.92} />
      <hr />
      <Pessoa nome="Opa" idade={35} altura={1.82} />
      <hr />
      <Pessoa nome="Parcero" idade={22} altura={2.15} />
    </div>
  );
}
