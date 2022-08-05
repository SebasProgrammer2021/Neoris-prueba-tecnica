const updatePokemon = async (data) => {
  const response = await fetch(
    `https://bp-pokemons.herokuapp.com/${data?.id}`,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(data?.data),
    }
  );

  return response.json();
};

export default updatePokemon;
