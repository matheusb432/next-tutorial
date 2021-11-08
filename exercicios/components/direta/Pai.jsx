import Filho from './Filho';

export default function Pai(props) {
  return (
    <div>
      <h1>Family {props.familia}</h1>
      <Filho nome="name #1" familia={props.familia} />
      <Filho nome="name #2" familia={props.familia} />
      <Filho {...props} nome="name #3" />
    </div>
  );
}
