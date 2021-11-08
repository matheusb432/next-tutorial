function gerarLista(tamanho = 10) {
  const list = [];
  for (let i = 0; i < tamanho; i++) {
    if (i && i % 40 == 0) {
      list.push(<span>{i + 1}</span>);
      list.push(<br></br>);
    } else {
      list.push(<span>{i + 1}&nbsp;</span>);
    }
  }
  return list;
}

export default function lista() {
  return (
    <div>
      <div>{gerarLista(30)}</div>
      <div>{gerarLista(4)}</div>
      <div>{gerarLista(160)}</div>
    </div>
  );
}
