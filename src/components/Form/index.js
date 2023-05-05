import "./styles.css";
import FieldText from "../FieldText";
import DropDown from "../DropDown";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <FieldText label="Nome" placeholder="Digite seu nome" />
        <FieldText label="Cargo" placeholder="Digite seu cargo" />
        <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDown itens={times} />
      </form>
    </section>
  );
};

export default Form;
