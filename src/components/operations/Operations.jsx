import React, { useEffect, useState } from "react";
import { useFindPokemon } from "../../api/services/findPokemon";

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
          <input type="text" onChange={handleSearch} placeholder="Buscar" />
        </div>
      </div>
      <div>
        <button id="headerNewPokemonBtn">Nuevo</button>
      </div>
    </div>
  );
};

export default Operations;
