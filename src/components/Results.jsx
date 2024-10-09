import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result, index) => (
        <div key={result.id || index}> {result.title} </div>
      ))}
    </div>
  );
}
