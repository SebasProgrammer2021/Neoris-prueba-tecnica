import { useQuery } from "@tanstack/react-query";
import getPokemons from "../endpoints/getpokemons";

const useGetPokemons = () => {
  const { isLoading, error, data } = useQuery(["GET_POKEMONS"], getPokemons);

  return { error, isLoading, data };
};

export default useGetPokemons;
