import React from "react";
import useDeletePokemon from "../../api/services/deletePokemon";
import useGetPokemons from "../../api/services/getpokemons";
import Button from "../common/Button";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../../images/spinner-2.gif";

const PokemonList = ({ pokemonData, setPokemonToUpdate }) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useDeletePokemon();
  const { data } = useGetPokemons();

  const handleDelete = (pokemonId) => {
    // console.log("deleting", pokemonId);
    mutate(pokemonId, {
      onSuccess: (data) => {
        if (data?.success) {
          console.log(
            "🚀 ~ file: PokemonList.jsx ~ line 13 ~ mutate ~ data",
            data
          );
          queryClient.invalidateQueries(["GET_POKEMONS"]);
        }
      },
      onError: (error) => {
        if (error) {
          console.log(
            "🚀 ~ file: PokemonList.jsx ~ line 18 ~ mutate ~ error",
            error
          );
        }
      },
    });
  };

  const handleUpdate = (pokemonToUpdate) => {
    setPokemonToUpdate(pokemonToUpdate);
  };

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
                <Button
                  customStyles="customStyles"
                  icon={
                    "https://img.icons8.com/pastel-glyph/64/7950F2/pencil--v2.png"
                  }
                  name={""}
                />
                {isLoading ? (
                  <img
                    className="pokemonListActionsSpinner pokemonListDeleteBtn"
                    src={Spinner}
                    alt="loading icon"
                    width={200}
                    height={200}
                  />
                ) : (
                  <Button
                    handleFunction={() => {
                      handleDelete(pokemonData.id);
                    }}
                    customStyles="customStyles pokemonListDeleteBtn"
                    icon={
                      "https://img.icons8.com/material-rounded/24/7950F2/delete-forever.png"
                    }
                    name=""
                  />
                )}
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
                  <Button
                    customStyles="customStyles"
                    icon={
                      "https://img.icons8.com/pastel-glyph/64/7950F2/pencil--v2.png"
                    }
                    handleFunction={() => {
                      handleUpdate(pokemon);
                    }}
                  />
                  {isLoading ? (
                    <img
                      className="pokemonListActionsSpinner pokemonListDeleteBtn"
                      src={Spinner}
                      alt="loading icon"
                      width={200}
                      height={200}
                    />
                  ) : (
                    <Button
                      handleFunction={() => {
                        handleDelete(pokemon.id);
                      }}
                      customStyles="customStyles pokemonListDeleteBtn"
                      icon={
                        "https://img.icons8.com/material-rounded/24/7950F2/delete-forever.png"
                      }
                    />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
