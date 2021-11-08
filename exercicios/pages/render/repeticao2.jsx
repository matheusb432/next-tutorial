import listaProdutos from "../../data/listaProdutos";
export default function repeticao2() {
  const borda = {
    border: "1px solid #000",
  };

  function renderizarLinhas() {
    return listaProdutos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td style={borda}>{produto.id}</td>
          <td style={borda}>{produto.nome}</td>
          <td style={borda}>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table style={borda}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
