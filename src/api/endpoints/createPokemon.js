const createPokemon = async (data) => {
  const response = await fetch(
    `https://bp-pokemons.herokuapp.com/?idAuthor=1`,
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(data),
    }
  );

  return response.json();
};

export default createPokemon;
