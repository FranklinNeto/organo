import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./styles.css";

const ColaboradorCard = (props) => {
  const favoritar = () => {
    props.aoFavoritar(props.idColaborador);
  };

  const propriedadesFavorito = {
    // este objeto evita repetição de código nos icones dos corações
    size: 25,
    onClick: favoritar, //sem funcao anonima pois a funcao está logo acima
    className: "heart",
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        onClick={() => props.aoDeletar(props.idColaborador)} //função anonima para nao dar loop infinito
        size={25}
        className="deletar"
      ></AiFillCloseCircle>
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
        <div className="favoritar">
          {props.colaborador.favorito ? (
            <AiFillHeart {...propriedadesFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propriedadesFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ColaboradorCard;
