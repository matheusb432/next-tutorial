// ? importing a `export default` function
// import Comp1 from '../../components/modulo/funcionais';
// * import {{ Default, [rest of the exports] }}
// ? { {component name} as {alias} }, similar to python where you just rename an import
import Padrao, {
  Comp1 as C1,
  Comp2,
  Comp4,
  Comp5,
  Comp6,
} from '../../components/modulo/funcionais';

export default function teste() {
  return (
    <div>
      <Padrao />
      <C1 />
      <Comp2 />
      <Comp4 />
      <Comp5 />
      <Comp6 msg={'random message'} />
    </div>
  );
}
