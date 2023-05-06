import ColaboradorCard from "../ColaboradorCard";
import "./styles.css";

const Time = (props) => {
  const estilos = { backgroundColor: props.corSecundaria };

  const array = props.colaboradores;
  return array.length > 0 ? (
    <section className="time" style={estilos}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <ColaboradorCard
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
