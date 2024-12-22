import React from 'react'
import { Link } from "react-router-dom";

function characters({characters}) {
  return (
    <>
      {characters.map((character) => (
        <div
          key={character.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
        >
          <Link to={`/character/${character.id}`}>
            <div className="card text-center shadow-sm h-100">
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default characters
