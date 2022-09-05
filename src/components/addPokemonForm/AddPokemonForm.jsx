import React, { useEffect, useState } from "react";
import Button from "../common/button/Button";
import "./styles.css";
import useCreatePokemon from "../../api/services/createPokemon";
import { useQueryClient } from "@tanstack/react-query";
import useUpdatePokemon from "../../api/services/updatePokemon";
import Alert from "../common/alert/Alert";
import { useForm } from "react-hook-form";
import handleClose from "../../helpers/handleClose";

const AddPokemonForm = ({ pokemonToUpdate, setPokemonToUpdate }) => {
  const queryClient = useQueryClient();
  const { mutate } = useCreatePokemon();
  const { updatePokemonMutate } = useUpdatePokemon();
  const { reset, setValue, register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      image: pokemonToUpdate?.image || "",
      attack: pokemonToUpdate?.attack || "",
      defense: pokemonToUpdate?.defense || "",
    },
  });
  const [isNotAlowedToSave, setIsNotAlowedToSave] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    show: false,
  });

  const { id } = pokemonToUpdate || {};
  const isAddMode = !id;

  const handleUpdate = (formattedData) => {
    let data = {
      data: formattedData,
      id: pokemonToUpdate?.id,
    };

    updatePokemonMutate(data, {
      onSuccess: (data) => {
        if (data.id) {
          setAlertMessage({
            message: "Pokemon editado exitosamente!",
            show: true,
          });
          reset({
            name: "",
            image: "",
            attack: "",
            defense: "",
          });
          queryClient.invalidateQueries(["FIND_POKEMON"]);
        }
      },
      onError: (error) => {
        setAlertMessage({
          message: error,
          show: true,
        });
      },
    });
  };

  const handleCreate = (formattedData) => {
    mutate(formattedData, {
      onSuccess: (data) => {
        if (data.id) {
          setAlertMessage({
            message: "Pokemon agregado exitosamente!",
            show: true,
          });
          reset({
            name: "",
            image: "",
            attack: "",
            defense: "",
            hp: "",
          });
          queryClient.invalidateQueries(["GET_POKEMONS"]);
        }
      },
      onError: (error) => {
        setAlertMessage({
          message: error,
          show: true,
        });
      },
    });
  };

  const pokemonName = watch("name");
  const pokemonImage = watch("image");
  const pokemonAttack = watch("attack");
  const pokemonDefence = watch("defense");
  const pokemonHp = watch("hp");

  const onSubmit = (data) => {
    let formattedData = {
      name: data.name,
      image: data.image,
      attack: data.attack,
      defense: data.defense,
      hp: data.hp,
      type: "Dragon",
      idAuthor: 2999,
    };

    isAddMode ? handleCreate(formattedData) : handleUpdate(formattedData);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setPokemonToUpdate();
    reset({
      name: "",
      image: "",
      attack: "",
      defense: "",
      hp: "",
    });
  };

  useEffect(() => {
    if (!isAddMode) {
      setValue("name", pokemonToUpdate?.name);
      setValue("image", pokemonToUpdate?.image);
      setValue("attack", pokemonToUpdate?.attack);
      setValue("defense", pokemonToUpdate?.defense);
      setValue("hp", pokemonToUpdate?.hp);
    }
  }, [isAddMode, pokemonToUpdate, setValue]);

  useEffect(() => {
    if (
      pokemonName &&
      pokemonImage &&
      pokemonAttack &&
      pokemonDefence &&
      pokemonHp
    ) {
      setIsNotAlowedToSave(false);
    } else {
      setIsNotAlowedToSave(true);
    }
  }, [pokemonAttack, pokemonDefence, pokemonImage, pokemonName, pokemonHp]);

  return (
    <div className="pokemonFormData">
      {alertMessage.show && (
        <Alert
          handleClose={handleClose(setAlertMessage)}
          message={alertMessage.message}
        />
      )}
      <h2>{isAddMode ? "Nuevo" : "Editar"} Pokemon</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pokemonFormDataAttributes">
          <div className="pokemonFormInputs">
            <div id="labels">
              <label htmlFor="name">Nombre: </label>
              <label htmlFor="image">Imagen: </label>
            </div>
            <div id="inputs">
              <input
                {...register("name", {
                  required: "Este campo es requerido",
                })}
                className="inputText"
                data-testid="inputName"
                id="name"
              ></input>
              <input
                {...register("image", {
                  required: "Este campo es requerido",
                })}
                className="inputText"
                data-testid="inputImage"
                id="image"
              ></input>
            </div>
          </div>
          <div id="pokemonPowers" className="pokemonPowers">
            <div id="rangeLabels">
              <label htmlFor="attack">Ataque:</label>
              <label htmlFor="defence">Defensa:</label>
              <label htmlFor="defence">Hp:</label>
            </div>
            <div id="inputs">
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span>0</span>
                <input
                  {...register("attack", {
                    required: "Este campo es requerido",
                  })}
                  data-testid="rangeAttack"
                  type="range"
                  min={0}
                  max={100}
                  name="attack"
                  id="attack"
                />
                <span>100</span>
              </div>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span>0</span>
                <input
                  {...register("defense", {
                    required: "Este campo es requerido",
                  })}
                  data-testid="rangeDefence"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="defense"
                  id="defense"
                />
                <span>100</span>
              </div>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span>0</span>
                <input
                  {...register("hp", {
                    required: "Este campo es requerido",
                  })}
                  data-testid="rangeHp"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  name="hp"
                  id="hp"
                />
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
        <div className="actionsButtons">
          <Button
            disabled={isNotAlowedToSave}
            handleFunction={onSubmit}
            icon={"https://img.icons8.com/ios-glyphs/30/FFFFFF/save--v1.png"}
            name={"Guardar"}
            testid="saveBtn"
            type="submit"
          />
          <Button
            handleFunction={(e) => {
              handleCancel(e);
            }}
            icon={"https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"}
            name={"Cancelar"}
            testid="cancelBtn"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPokemonForm;
