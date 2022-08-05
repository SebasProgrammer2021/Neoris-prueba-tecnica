const getPokemons = async () => {
  const response = await fetch(
    `https://bp-pokemons.herokuapp.com/?idAuthor=1`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    }
  ).then((response) => response.json());
  return response;
};

export default getPokemons;
