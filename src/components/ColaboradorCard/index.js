import "./styles.css";

const ColaboradorCard = (props) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img
          src="https://github.com/FranklinNeto.png"
          alt="imagem do usuário"
        />
      </div>
      <div className="rodape">
        <h4>Franklin Neto</h4>
        <h5>Dev Front-End</h5>
      </div>
    </div>
  );
};

export default ColaboradorCard;
