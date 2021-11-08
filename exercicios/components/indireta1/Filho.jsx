export default function Filho(props) {
  console.log(props.funcao);
  return (
    <div>
      <h1>Componente Filho</h1>

      <button onClick={props.funcao('henlo')}>
        Executar metodo de onClick() somente na inicializacao do componente{' '}
      </button>

      <button onClick={props.funcao}>
        Passar evento para componente pai #01
      </button>

      <button onClick={(e) => props.funcao(e)}>
        Passar evento para componente pai #02
      </button>

      <button
        onClick={() =>
          props.funcao('String #01 em componente Filho', 'string #02')
        }>
        Passar string para componente pai
      </button>
    </div>
  );
}
