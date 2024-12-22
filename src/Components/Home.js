import React, { useEffect } from "react";
import useCharactersViewModel from "../viewModel/CharactersViewModel";
import Characters from "../Components/Characters";


function Home() {
  const { characters, fetchCharacters, loading, error } =
    useCharactersViewModel();

      useEffect(() => {
        fetchCharacters();
      }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h1 className="text-center mb-4">Rick and Morty </h1>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        {loading && <p className="text-primary">Loading characters...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && characters.length > 0 ? (
          <div className="row justify-content-center w-75">
    
            <Characters characters={characters} />
          </div>
        ) : (
          !loading && <p className="text-muted">No characters found.</p>
        )}
      </div>
    </div>
  );
}

export default Home
