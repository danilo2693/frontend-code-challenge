import { sortByProperty } from "../helpers/sortByProperty";

export const useFilterPokemons = (pokemons, pokemonNameFiltered) => {
  const filteredResults = pokemons.filter(
    (result) =>
      result.name.toLowerCase().includes(pokemonNameFiltered.toLowerCase()) ||
      result.type.some((type) =>
        type.toLowerCase().includes(pokemonNameFiltered.toLowerCase())
      )
  );
  const limit = 4;
  const min = 0;
  const finalResults = filteredResults.slice(min, limit);
  finalResults.sort(sortByProperty("name"));
  finalResults.sort(sortByProperty("type"));
  return finalResults;
};
