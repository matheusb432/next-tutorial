import { useEffect, useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';
import { getAposta } from '../../functions/aposta';

export default function aposta() {
  const defaultNumbers = 6;

  const [digitos, setDigitos] = useState(defaultNumbers);

  const [apostaRenderizada, setApostaRenderizada] = useState([]);

  // ! useEffect() fixes the SSR Next error (Text content did not match. Server: "510486" Client: "955715")
  useEffect(() => {
    setApostaRenderizada(mapAposta());
  }, []);

  // ? NOTE: I made a custom function to allow the generation of bigger random numbers
  function renderAposta() {
    setApostaRenderizada(mapAposta());
  }

  function mapAposta() {
    return getAposta(digitos).map((n, i) => {
      return <NumeroDisplay key={i} num={n} size={'75px'} />;
    });
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {apostaRenderizada}
      </div>
      <input
        type="number"
        value={digitos}
        onChange={(e) => setDigitos(e.target.value)}
      />
      <button onClick={renderAposta}>Gerar aposta</button>
    </div>
  );
}
