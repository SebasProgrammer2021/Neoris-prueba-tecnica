import React, { useEffect, useState } from "react";
import { useFindPokemon } from "../../api/services/findPokemon";
import Button from "../common/Button";

const Operations = ({ setPokemonData }) => {
  const [idPokemon, setIdPokemon] = useState();
  const { data, isLoading } = useFindPokemon(idPokemon);

  const handleSearch = (e) => {
    setIdPokemon(e.target.value);
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
          icon={"https://img.icons8.com/android/24/FFFFFF/plus.png"}
          name={"Nuevo"}
        />
      </div>
    </div>
  );
};

export default Operations;
