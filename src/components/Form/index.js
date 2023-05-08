import "./styles.css";
import FieldText from "../FieldText";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoSalvarNovoTime = (event) => {
    event.preventDefault();
    props.cadastrarTime({
      nome: nomeTime,
      cor: corTime,
    });

    setNomeTime("");
    setCorTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <FieldText
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio
          label="Nome"
          placeholder="Digite seu nome"
        />
        <FieldText
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <FieldText
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <DropDown
          obrigatorio
          itens={props.time}
          label="Time"
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar Card</Button>
      </form>
      <form onSubmit={aoSalvarNovoTime}>
        <h2>Preencha os dados para criar um novo time:</h2>
        <FieldText
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome do time"
          placeholder="Digite o nome do time"
        />
        <FieldText
          type="color"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          label="Cor do Time"
        />

        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
