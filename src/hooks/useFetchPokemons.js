import { useState, useEffect } from "react";
import { getPokemons } from "../helpers/getPokemons";
import { sortByProperty } from "../helpers/sortByProperty";

export const useFetchPokemons = (inputValue, orderByTotal) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getPokemons().then((pokemons) => {
      if (orderByTotal) {
        pokemons.sort(sortByProperty("total"));
      }
      pokemons.forEach((pokemon, index) => {
        pokemon.id = index
      })
      setState({ data: pokemons, loading: false });
    });
  }, [inputValue, orderByTotal]);
  return state;
};
