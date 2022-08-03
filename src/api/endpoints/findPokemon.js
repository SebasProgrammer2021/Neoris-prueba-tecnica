const findPokemon = async (id) => {
  const response = await fetch(`https://bp-pokemons.herokuapp.com/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  }).then((response) => response.json());
  return response;
};

export default findPokemon;
