import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import "./styles.css";
import useCreatePokemon from "../../api/services/createPokemon";
import { useQueryClient } from "@tanstack/react-query";
import useUpdatePokemon from "../../api/services/updatePokemon";

const AddPokemonForm = ({ pokemonToUpdate, setPokemonToUpdate }) => {
  const queryClient = useQueryClient();
  const { mutate } = useCreatePokemon();
  const { updatePokemonMutate } = useUpdatePokemon();
  const [isNotAlowedToSave, setIsNotAlowedToSave] = useState(true);
  const [pokemonAttributes, setPokemonAttributes] = useState({
    name: "",
    image: "",
    attack: 50,
    defense: 50,
    hp: 100,
    type: "Dragon",
    idAuthor: 2999,
  });

  const handleChange = (e) => {
    setPokemonAttributes({
      ...pokemonAttributes,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    let data = {
      data: pokemonAttributes,
      id: pokemonToUpdate?.id,
    };

    updatePokemonMutate(data, {
      onSuccess: (data) => {
        console.log(
          "🚀 ~ file: AddPokemonForm.jsx ~ line 30 ~ handleSubmit ~ data",
          data
        );
        queryClient.invalidateQueries(["GET_POKEMONS"]);
      },
      onError: (error) => {
        console.log(
          "🚀 ~ file: AddPokemonForm.jsx ~ line 42 ~ handleSubmit ~ error",
          error
        );
      },
    });
  };

  console.log(
    "🚀 ~ file: AddPokemonForm.jsx ~ line 22 ~ AddPokemonForm ~ pokemonAttributes",
    pokemonAttributes
  );

  const handleSubmit = () => {
    pokemonToUpdate
      ? handleUpdate()
      : mutate(pokemonAttributes, {
          onSuccess: (data) => {
            console.log(
              "🚀 ~ file: AddPokemonForm.jsx ~ line 30 ~ handleSubmit ~ data",
              data
            );
            queryClient.invalidateQueries(["GET_POKEMONS"]);

            // if (data.status) {

            // }
          },
          onError: (error) => {
            console.log(
              "🚀 ~ file: AddPokemonForm.jsx ~ line 42 ~ handleSubmit ~ error",
              error
            );
          },
        });
  };

  const handleCancel = () => {
    console.log("entro");
    setPokemonToUpdate();
    setPokemonAttributes({
      name: "",
      image: "",
      attack: "",
      defense: "",
      hp: 100,
      type: "Dragon",
      idAuthor: 2999,
    });
  };

  useEffect(() => {
    if (
      pokemonAttributes.attack &&
      pokemonAttributes.defense &&
      pokemonAttributes.image &&
      pokemonAttributes.name
    ) {
      setIsNotAlowedToSave(false);
    } else {
      setIsNotAlowedToSave(true);
    }

    if (pokemonToUpdate) {
      setPokemonAttributes({
        name: pokemonToUpdate?.name,
        image: pokemonToUpdate?.image,
        attack: pokemonToUpdate?.attack,
        defense: pokemonToUpdate?.defense,
        hp: 100,
        type: "Dragon",
        idAuthor: 2999,
      });
    }
  }, [
    pokemonAttributes.attack,
    pokemonAttributes.defense,
    pokemonAttributes.image,
    pokemonAttributes.name,
    pokemonToUpdate,
  ]);

  return (
    <div className="pokemonFormData">
      <h2>{"Nuevo"} Pokemon</h2>
      <div className="pokemonFormDataAttributes">
        <div className="pokemonFormInputs">
          <div id="labels">
            <label htmlFor="name">Nombre: </label>
            <label htmlFor="image">Imagen: </label>
          </div>
          <div id="inputs">
            <input
              className="inputText"
              id="name"
              name="name"
              defaultValue={pokemonAttributes?.name}
              onChange={handleChange}
              required
            ></input>
            <input
              className="inputText"
              id="image"
              name="image"
              defaultValue={pokemonAttributes?.image}
              onChange={handleChange}
              required
            ></input>
          </div>
        </div>
        <div id="pokemonPowers" className="pokemonPowers">
          <div id="rangeLabels">
            <label htmlFor="attack">Ataque:</label>
            <label htmlFor="defence">Defensa:</label>
          </div>
          <div id="inputs">
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>0</span>
              <input
                type="range"
                min={0}
                max={100}
                name="attack"
                id="attack"
                defaultValue={pokemonAttributes?.attack}
                onChange={handleChange}
              />
              <span>100</span>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>0</span>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                name="defense"
                id="defence"
                defaultValue={pokemonAttributes?.defense}
                onChange={handleChange}
              />
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="actionsButtons">
        <Button
          disabled={isNotAlowedToSave}
          handleFunction={handleSubmit}
          icon={"https://img.icons8.com/ios-glyphs/30/FFFFFF/save--v1.png"}
          name={"Guardar"}
        />
        <Button
          handleFunction={handleCancel}
          icon={"https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"}
          name={"Cancelar"}
        />
      </div>
    </div>
  );
};

export default AddPokemonForm;
