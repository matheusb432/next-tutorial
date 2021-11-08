import { useState } from 'react';

export default function formulario() {
  const [value, setValue] = useState('inicial');

  function alterarInput() {
    setValue(`${value}!`);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <span>Label {value}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // ? readOnly
      />
      <button onClick={alterarInput}>Alterar</button>
    </div>
  );
}
