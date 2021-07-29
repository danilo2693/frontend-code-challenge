import React from "react";
import { getHighlightedText } from "../helpers/getHighlightedText";
import PropTypes from "prop-types";

export const Pokemon = ({ pokemon, pokemonNameFiltered }) => {
  return (
    <li key={pokemon.id}>
      <img src={pokemon.sprites.normal} alt={pokemon.name} />
      <div className="info">
        <h1>{getHighlightedText(pokemon.name, pokemonNameFiltered)}</h1>
        {pokemon.type.map((type) => (
          <span key={type.toString()} className={`type ${type.toLowerCase()}`}>
            {type}
          </span>
        ))}
      </div>
    </li>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
