import If from '../../components/If';

export default function condicional2() {
  const number = 4;
  return (
    <div>
      <If teste={number % 2 === 0}>
        <h1>Number {number} is even</h1>
      </If>
      <If teste={number % 2 === 1}>
        <h1>Number {number} is even</h1>
      </If>
    </div>
  );
}
