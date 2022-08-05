import { useMutation } from "@tanstack/react-query";
import deletePokemon from "../endpoints/deletePokemon";

const useDeletePokemon = () => {
  return useMutation(deletePokemon);
};

export default useDeletePokemon;
