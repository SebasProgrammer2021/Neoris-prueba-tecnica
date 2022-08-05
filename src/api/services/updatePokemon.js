import { useMutation } from "@tanstack/react-query";
import updatePokemon from "../endpoints/updatePokemon";

const useUpdatePokemon = () => {
  const { mutate } = useMutation(updatePokemon);

  return { updatePokemonMutate: mutate };
};

export default useUpdatePokemon;
