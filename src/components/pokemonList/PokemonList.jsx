import React, { useState } from "react";
import useDeletePokemon from "../../api/services/deletePokemon";
import useGetPokemons from "../../api/services/getpokemons";
import Button from "../common/button/Button";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from "../../images/spinner-2.gif";
import Alert from "../common/alert/Alert";
import handleClose from "../../helpers/handleClose";

const PokemonList = ({
  pokemonData,
  setPokemonToUpdate,
  setShowFormNewPokemon,
  setPokemonData,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useDeletePokemon();
  const { data } = useGetPokemons();
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    show: false,
  });

  const handleDelete = (pokemonId) => {
    mutate(pokemonId, {
      onSuccess: (data) => {
        if (data?.success) {
          setAlertMessage({
            message: "Pokemon borrado exitosamente!",
            show: true,
          });
          queryClient.invalidateQueries(["FIND_POKEMON"]);
          queryClient.invalidateQueries(["GET_POKEMONS"]);
          setPokemonData();
        }
      },
      onError: (error) => {
        if (error) {
          setAlertMessage({
            message: error,
            show: true,
          });
        }
      },
    });
  };

  const handleUpdate = (pokemonToUpdate) => {
    setPokemonToUpdate(pokemonToUpdate);
    setShowFormNewPokemon(true);
  };

  const hc = () => {
    handleClose(setAlertMessage);
  };

  return (
    <div className="pokemonListContainer">
      {alertMessage.show && (
        <Alert handleClose={hc} message={alertMessage.message} />
      )}
      <table className="custt">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Hp</th>
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
              <td>{pokemonData.hp}</td>
              <td className="tableActionsStyles">
                <Button
                  customStyles="customStyles"
                  handleFunction={() => {
                    handleUpdate(pokemonData);
                  }}
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
                <td>{pokemon.hp}</td>
                <td className="tableActionsStyles">
                  <Button
                    testid={`updateBtn${pokemon.id}`}
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
                      testid="pokemonListDeleteBtnId"
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
