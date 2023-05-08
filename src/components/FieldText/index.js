import "./styles.css";

const FieldText = ({
  type = "text",
  placeholder,
  aoAlterado,
  label,
  valor,
  obrigatorio = false,
}) => {
  const placeholderModificada = `${placeholder}...`; //concatena placeholder com "..."

  const aoDigitado = (event) => {
    aoAlterado(event.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default FieldText;

/* Concatenar placeholder com "..." sem declarar placeholderModificada antes: 

<input placeholder={`${placeholder.props}...`} />

*/
