import { useState } from "react";
import "./App.css";
import AddPokemonForm from "./components/addPokemonForm/AddPokemonForm";
import PokemonList from "./components/pokemonList/PokemonList";
import Operations from "./components/operations/Operations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonToUpdate, setPokemonToUpdate] = useState();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Listado de Pokemon</h1>
        <Operations setPokemonData={setPokemonData} />
        <PokemonList
          pokemonData={pokemonData}
          setPokemonToUpdate={setPokemonToUpdate}
        />
        <AddPokemonForm
          pokemonToUpdate={pokemonToUpdate}
          setPokemonToUpdate={setPokemonToUpdate}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
