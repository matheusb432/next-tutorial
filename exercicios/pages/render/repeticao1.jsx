export default function repeticao1() {
  const listaAprovados = [
    "Joao",
    "Maria",
    "Laura",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Pedro",
  ];

  function renderizarLista() {
    // ? equivalente
    listaAprovados.map(function (nome, i) {
      return (
        <li key={i}>
          {i + 1} -- {nome}
        </li>
      );
    });

    // ? Loop para criar lista em JSX
    return listaAprovados.map((nome, i) => (
      <li key={i}>
        {i + 1} -- {nome}
      </li>
    ));
  }

  return <ul>{renderizarLista()}</ul>;
}
