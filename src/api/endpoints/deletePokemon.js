const deletePokemon = async (id) => {
  const response = await fetch(`https://bp-pokemons.herokuapp.com/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "strict-origin-when-cross-origin",
  });

  return response.json();
};

export default deletePokemon;
