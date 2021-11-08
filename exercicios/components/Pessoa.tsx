interface PessoaProps {
  nome: string;
  idade: number;
  altura?: number;
}

export default function Pessoa(props: PessoaProps) {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade}</div>
      <div>Altura: {props.altura ?? 'Não Informada'}</div>
    </div>
  );
}
