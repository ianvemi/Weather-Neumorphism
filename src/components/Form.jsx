import React ,{useState} from "react";

const Form = ({pushEntries, search, addSearch}) => {

  
  //useState error
  const [error, setError] = useState(false)

  //Deetructuring de search
  const {pais, ciudad} = search;

  //Cuando se ingresan valores a select e input
  const handleChange = (e) => {
    addSearch({ ...search, [e.target.name] : e.target.value })
  }

  //Cuando se presiona el boton submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(pais.trim()) 
    // console.log(ciudad.trim())
    if(pais.trim() === '' || ciudad.trim() === ''){

      setError(true);
      return;
    }
    setError(false);
    pushEntries(true);

  }

  return (
    <form
    onSubmit={handleSubmit}
    >
      <div className="form">
      {
          error
          ? <p className="error">Rellene los campos correctamente.</p>
          :<p></p>
        }
        <select
        name="pais"
        id="pais"
        value={pais}
        onChange={handleChange}
        >
          <option> Seleccione un país</option>
          <option value="MX">México</option>
          <option value="US">Estados Unidos</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>

        <input
          type="text"
          name="ciudad"
          id="ciudad"
          placeholder="Ciudad / Estado"
          value={ciudad}
          onChange={handleChange}
        ></input>
       
      </div>
      <div className="boton">
      <button
      type="submit"
      >Buscar</button>
      </div>
      
    </form>
  );
};

export default Form;
