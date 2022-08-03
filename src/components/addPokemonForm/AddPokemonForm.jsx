import React from "react";
import "./styles.css";

const AddPokemonForm = () => {
  return (
    <div className="pokemonFormData">
      <h2>Nuevo Pokemon</h2>
      <div className="pokemonFormDataAttributes">
        <div className="pokemonFormInputs">
          <div id="labels">
            <label htmlFor="">Nombre: </label>
            <label htmlFor="">Imagen: </label>
          </div>
          <div id="inputs">
            <input className="inputText"></input>
            <input className="inputText"></input>
          </div>
        </div>
        <div id="pokemonPowers" className="pokemonPowers">
          <div id="labels">
            <label htmlFor="">Ataque: </label>
            <label htmlFor="">Defensa: </label>
          </div>
          <div id="inputs">
            <input type="range" name="attack" id="" />
            <input type="range" name="defence" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPokemonForm;
