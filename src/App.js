import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const cadastrarTime = (novoTime) => {
    //o parâmetro novoTime é um objeto
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        cadastrarTime={cadastrarTime}
        time={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => {
          aoNovoColaboradorAdicionado(colaborador);
        }}
      />
      <section className="times">
        <h1>Minha Organização</h1>
        {times.map((time) => (
          <Time
            key={time.id}
            idTime={time.id}
            mudarCor={mudarCorDoTime}
            nome={time.nome}
            corPrimaria={time.cor}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
