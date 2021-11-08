import { useState } from 'react';

export default function mouse() {
  // * React Hooks
  // ! equivalent but verbose
  // const arrayX = useState(0);
  // let x = arrayX[0];
  // const setX = arrayX[1];

  // ? Clean way of setting state variables and methods
  const [x, setX] = useState(0);

  const [y, setY] = useState(1);

  const estilo = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    color: '#fff',
    height: '100vh',
  };

  function quandoMover(ev) {
    setX(ev.clientX);
    setY(ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}
