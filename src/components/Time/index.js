import ColaboradorCard from "../ColaboradorCard";
import "./styles.css";

const Time = (props) => {
  const estilos = {
    backgroundColor: props.corSecundaria,
    backgroundImage: "url(/imagens/fundo.png)",
  };

  const array = props.colaboradores;
  return array.length > 0 ? (
    <section className="time" style={estilos}>
      <input
        value={props.corSecundaria}
        type="color"
        className="input-cor"
        onChange={(event) => props.mudarCor(event.target.value, props.nome)}
      ></input>

      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <ColaboradorCard
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={props.aoDeletar}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
