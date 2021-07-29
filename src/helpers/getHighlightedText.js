import React from "react";

export const getHighlightedText = (name, pokemonNameFiltered) => {
    const highlight = pokemonNameFiltered.toLowerCase();
    const parts = name.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="hl">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };