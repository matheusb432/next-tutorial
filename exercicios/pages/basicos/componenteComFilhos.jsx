import Item from '../../components/Item';
import Lista from '../../components/Lista';

export default function componenteComFilhos() {
  return (
    <div>
      <Lista>
        <Item conteudo="Item #1"></Item>
        <Item conteudo="Item #2"></Item>
        <Item conteudo="Item #3"></Item>
        <Item conteudo="Item #4"></Item>
        <Item conteudo="Item #5"></Item>
      </Lista>
    </div>
  );
}
