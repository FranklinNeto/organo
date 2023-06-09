import ColaboradorCard from "../ColaboradorCard";
import hexToRgba from "hex-to-rgba";
import "./styles.css";

const Time = (props) => {
  const estilos = {
    backgroundColor: hexToRgba(props.corPrimaria, "0.6"),
    backgroundImage: "url(/imagens/fundo.png)",
  };

  const array = props.colaboradores;
  return array.length > 0 ? (
    <section className="time" style={estilos}>
      <input
        value={props.corPrimaria}
        type="color"
        className="input-cor"
        onChange={(event) => props.mudarCor(event.target.value, props.idTime)}
      ></input>

      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <ColaboradorCard
            corDeFundo={props.corPrimaria}
            key={colaborador.id}
            idColaborador={colaborador.id}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={props.aoDeletar}
            aoFavoritar={props.aoFavoritar}
            colaborador={colaborador}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
