import React, { useState } from "react";
import "./App.css";
import { Pokemon } from "./components/pokemon";
import { useFetchPokemons } from "./hooks/useFetchPokemons";
import { useFilterPokemons } from "./hooks/useFilterPokemons";
const App = () => {
  const [pokemonNameFiltered, setPokemonNameFiltered] = useState("");
  const handlePokemonNameFiltered = (event) =>
    setPokemonNameFiltered(event.target.value);

  const [orderByTotal, setOrderByTotal] = useState(false);
  const handleOrderByTotal = (event) => setOrderByTotal(event.target.checked);

  const { data: pokemons, loading } = useFetchPokemons(
    pokemonNameFiltered,
    orderByTotal
  );

  const finalResults = useFilterPokemons(pokemons, pokemonNameFiltered);
  return (
    <>
      <label htmlFor="maxCP" className="max-cp">
        <input
          type="checkbox"
          id="maxCP"
          checked={orderByTotal}
          onChange={handleOrderByTotal}
        />
        <small>Maximum Combat Points</small>
      </label>
      <input
        type="text"
        className="input"
        placeholder="Pokemon or type"
        value={pokemonNameFiltered}
        onChange={handlePokemonNameFiltered}
      />
      {loading ? (
        <div className="loader"></div>
      ) : (
        <ul className="suggestions">
          {finalResults.length > 0 ? (
            finalResults.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                pokemonNameFiltered={pokemonNameFiltered}
              />
            ))
          ) : (
            <li>
              <img
                src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png"
                alt=""
              />
              <div className="info">
                <h1 className="no-results">No results</h1>
              </div>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default App;
