import React from "react";
import { useGetPokemons } from "../../api/services/getpokemons";

const PokemonList = ({ pokemonData }) => {
  const { data } = useGetPokemons();

  return (
    <div className="pokemonListContainer">
      <table className="custt">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pokemonData ? (
            <tr>
              <td>{pokemonData.name}</td>
              <td>
                <picture className="pokemonListImg">
                  <img src={`${pokemonData.image}`} alt="" />
                </picture>
              </td>
              <td>{pokemonData.attack}</td>
              <td>{pokemonData.defense}</td>
              <td className="tableActionsStyles">
                <button>ed</button>
                <button>el</button>
              </td>
            </tr>
          ) : (
            data?.map((pokemon, key) => (
              <tr key={key}>
                <td>{pokemon.name}</td>
                <td>
                  <picture className="pokemonListImg">
                    <img src={`${pokemon.image}`} alt="" />
                  </picture>
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td className="tableActionsStyles">
                  <button>ed</button>
                  <button>el</button>
                </td>
              </tr>
            ))
          )}
          {/* {data?.map((pokemon, key) => (
            <tr key={key}>
              <td>{pokemon.name}</td>
              <td>
                <picture className="pokemonListImg">
                  <img src={`${pokemon.image}`} alt="" />
                </picture>
              </td>
              <td>{pokemon.attack}</td>
              <td>{pokemon.defense}</td>
              <td className="tableActionsStyles">
                <button>ed</button>
                <button>el</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
