import "./styles.css";

const FieldText = (props) => {
  const placeholderModificada = `${props.placeholder}...`; //concatena props.placeholder com "..."

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada} />
    </div>
  );
};

export default FieldText;

/* Concatenar props.placeholder com "..." sem declarar placeholderModificada antes: 

<input placeholder={`${placeholder.props}...`} />

*/
