import { useMutation } from "@tanstack/react-query";
import createPokemon from "../endpoints/createPokemon";

const useCreatePokemon = () => {
  const { mutate } = useMutation(createPokemon);

  return { mutate };
};

export default useCreatePokemon;
