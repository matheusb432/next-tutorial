export default function Tabuleiro(props) {
  const tabuleiro = [];
  const tamanhoTabuleiro = 8;
  const tamanhoCasa = 100;
  const multHorizontal = 1;
  const tamX = tamanhoTabuleiro;
  const tamY = tamanhoTabuleiro * multHorizontal;
  const estiloCasa = {
    position: 'fixed',
    width: tamanhoCasa,
    height: tamanhoCasa,
  };
  const fundoPreto = {
    backgroundColor: '#000',
  };
  const fundoBranco = {
    backgroundColor: '#fff',
  };

  for (let i = 0; i < tamX; i++) {
    for (let j = 0; j < tamY; j++) {
      const posicaoCasa = { left: tamanhoCasa * j, top: tamanhoCasa * i };
      if (isEven(j + i)) {
        tabuleiro.push(
          <div style={{ ...estiloCasa, ...posicaoCasa, ...fundoPreto }}></div>
        );
      } else {
        tabuleiro.push(
          <div style={{ ...estiloCasa, ...posicaoCasa, ...fundoBranco }}></div>
        );
      }
    }
  }

  return tabuleiro;
}

function isEven(n) {
  return n % 2 == 0;
}
