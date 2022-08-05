import React, { useEffect, useState } from "react";
import { useFindPokemon } from "../../api/services/findPokemon";
import Button from "../common/button/Button";

const Operations = ({ setShowFormNewPokemon, setPokemonData }) => {
  const [idPokemon, setIdPokemon] = useState();
  const { data } = useFindPokemon(idPokemon);

  const handleSearch = (e) => {
    setIdPokemon(e.target.value);
  };

  const handleShowForm = () => {
    setShowFormNewPokemon(true);
  };

  useEffect(() => {
    setPokemonData(data);
  }, [data, setPokemonData]);

  return (
    <div id="header" className="headerStyles">
      <div>
        <div className="">
          <input
            className="operationsSearchInput"
            type="text"
            onChange={handleSearch}
            placeholder="Buscar"
          />
        </div>
      </div>
      <div>
        <Button
          handleFunction={handleShowForm}
          icon={"https://img.icons8.com/android/24/FFFFFF/plus.png"}
          name={"Nuevo"}
        />
      </div>
    </div>
  );
};

export default Operations;
