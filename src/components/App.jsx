import React from "react";
import Term from "./Term.jsx";
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emoji => (
          <Term
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        ))}
        ;
      </dl>
    </div>
  );
}

console.log(emojipedia.map(shortText => shortText.meaning.substring(0, 100)));

export default App;
