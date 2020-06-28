import React from "react";
import Term from "./Term.jsx";

function createDefinition(emoji) {
  return (
    <Term
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

export default createDefinition;
