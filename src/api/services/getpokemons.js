import { useQuery } from "@tanstack/react-query";
import getPokemons from "../endpoints/getpokemons";

export const useGetPokemons = () => {
  const { isLoading, error, data } = useQuery(["GET_POKEMONS"], getPokemons);

  return { error, isLoading, data };
};
