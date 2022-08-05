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
  const [showFormNewPokemon, setShowFormNewPokemon] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Listado de Pokemon</h1>
        <Operations
          setPokemonData={setPokemonData}
          setShowFormNewPokemon={setShowFormNewPokemon}
        />
        <PokemonList
          pokemonData={pokemonData}
          setPokemonToUpdate={setPokemonToUpdate}
          setShowFormNewPokemon={setShowFormNewPokemon}
          setPokemonData={setPokemonData}
        />
        {showFormNewPokemon && (
          <AddPokemonForm
            pokemonToUpdate={pokemonToUpdate}
            setPokemonToUpdate={setPokemonToUpdate}
          />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
