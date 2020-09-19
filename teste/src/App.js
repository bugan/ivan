import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cartao from "./components/Cartao/Cartao";
import Formulario from "./components/Formulario/Formulario";

//statefull
const App = () => {
  const arrayVazio = [];
  //criação da variável usuários e variavel setUsuarios
  const [usuarios, setUsuario] = useState(arrayVazio);
  const [nomeApp, setNomeApp] = useState("Bolinha")

  const casdastrar = (event) => {
    event.preventDefault();
    const novoUsuario = {
      nome: event.currentTarget.nome.value,
      idade: event.currentTarget.idade.value,
    };

    const novosUsuarios = [...usuarios, novoUsuario];

    setUsuario(novosUsuarios);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{nomeApp}</h1>
        <Formulario casdastrar={casdastrar} />
        {usuarios.map((usuario) => {
          return (
            <Cartao
              nome={usuario.nome}
              idade={usuario.idade}
              options={{
                escolaridade: "graduado",
                trabalhando: "SIm",
              }}
            />
          );
        })}
      </header>
    </div>
  );
};


export default App;
