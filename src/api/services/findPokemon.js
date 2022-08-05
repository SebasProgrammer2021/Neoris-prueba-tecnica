import { useQuery } from "@tanstack/react-query";
import findPokemon from "../endpoints/findPokemon";

export const useFindPokemon = (pokemonId) => {
  const { data, error, isLoading } = useQuery(
    ["FIND_POKEMON", pokemonId],
    () => {
      if (pokemonId) {
        return findPokemon(pokemonId);
      }
    }
  );

  return { error, isLoading, data };
};
