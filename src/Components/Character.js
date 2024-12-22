import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useCharactersViewModel from "../viewModel/CharactersViewModel";

function Character() {
  const { id } = useParams();  
  const { fetchSingleCharacters, character, loading, error } =
    useCharactersViewModel();

  useEffect(() => {
    console.log("Character ID from URL:", id);  
    if (id) fetchSingleCharacters(id);  
  }, [id]);

  if (loading) return <p>Loading character details...</p>;  
  if (error) return <p>Error: {error}</p>;  

  if (!character) return <p>No character data found.</p>;  

  return (
    <div className="container my-5 d-flex align-items-center justifiy-content-center flex-column">
      <div className="card text-center shadow-sm w-100">
        <img
          src={character.image}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Status:</strong> {character.status}
          </p>
          <p className="card-text">
            <strong>Species:</strong> {character.species}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {character.gender}
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary w-50 my-5"> back</Link>
    </div>
  );
}
export default Character;
