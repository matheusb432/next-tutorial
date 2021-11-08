import Estilo from '../../components/Estilo';

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={-1} color='purple' />
      <Estilo numero={5} color='orange' direita />
    </div>
  );
}
