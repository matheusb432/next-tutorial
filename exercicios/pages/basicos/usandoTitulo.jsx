import Titulo from '../../components/Titulo';
import React from 'react';

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
        pequeno={false}
      />
      <Titulo
        principal="Página de Login"
        secundario="Informe o seu email e senha"
        pequeno={true}
      ></Titulo>
      <Titulo principal="Página de Login" secundario="Informe o seu email e senha" pequeno />
    </div>
  );
}
