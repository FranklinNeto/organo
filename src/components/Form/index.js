import "./styles.css";
import FieldText from "../FieldText";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <FieldText
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <FieldText
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <FieldText
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          obrigatorio={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <DropDown
          obrigatorio={true}
          itens={props.time}
          label="Time"
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
