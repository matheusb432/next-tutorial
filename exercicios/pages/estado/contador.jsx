import { useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';

export default function contador() {
  const [num, setNum] = useState(0);

  function changeNum(action) {
    switch (action) {
      case '+':
        setNum(num + 1);

        break;
      case '-':
        setNum(num - 1);

        break;
      default:
        setNum(action);
    }
  }

  // ? One line arrow functions, equivalent to function inc() { setNum(num + 1) }
  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1>Contador</h1>
      <NumeroDisplay num={num} />

      <div className="buttons">
        <button onClick={() => changeNum('+')}>+ #01</button>
        <button onClick={() => changeNum('-')}>- #01</button>
      </div>

      <div className="buttons">
        <button onClick={() => inc()}>+ #02</button>
        <button onClick={() => dec()}>- #02</button>
      </div>

      <div className="buttons">
        <button onClick={() => setNum(num + 1)}>+ #03</button>
        <button onClick={() => setNum(num - 1)}>- #03</button>
      </div>

      <div className="input">
        <input
          type="number"
          name="inputNum"
          id="inputNum"
          // ? onChange={(e) => changeNum(+e.target.value)}
        />
        <button
          onClick={() => changeNum(document.getElementById('inputNum').value)}>
          change number
        </button>
      </div>
    </div>
  );
}
