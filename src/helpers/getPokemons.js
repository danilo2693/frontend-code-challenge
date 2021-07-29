
const URL_PATH = "https://raw.githubusercontent.com/joseluisq/pokemons/master/pokemons.json";
export const getPokemons = async () => {
  const response = await fetch(URL_PATH);
  const { results } = await response.json();
  return results;
};
