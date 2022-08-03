import "./App.css";
import AddPokemonForm from "./components/addPokemonForm/AddPokemonForm";
import PokemonList from "./components/pokemonList/PokemonList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFindPokemon } from "./api/services/findPokemon";
import Operations from "./components/operations/Operations";
import { useState } from "react";
import Button from "./components/common/Button";
const queryClient = new QueryClient();

function App() {
  const [pokemonData, setPokemonData] = useState();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Listado de Pokemon</h1>
        {/* <Button name={"Nuevo"} /> */}
        <Operations setPokemonData={setPokemonData} />
        <PokemonList pokemonData={pokemonData} />
        <AddPokemonForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
