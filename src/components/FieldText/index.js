import "./styles.css";

const FieldText = (props) => {
  const placeholderModificada = `${props.placeholder}...`; //concatena props.placeholder com "..."

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default FieldText;

/* Concatenar props.placeholder com "..." sem declarar placeholderModificada antes: 

<input placeholder={`${placeholder.props}...`} />

*/
