import { useState, useCallback } from "react";
import { BASE_URL } from "../constants/Url";
const useCharactersViewModel = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState("");  
  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  

   const fetchCharacters = useCallback(async () => {
    if (loading) return;  
    setLoading(true);  
    setError(null);  
    try {
      const response = await fetch(`${BASE_URL}/character`);
      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }
      const data = await response.json();
      setCharacters(data.results);   
    } catch (err) {
      setError(err.message);  
    } finally {
      setLoading(false);  
    }
  }, [loading]);  

const fetchSingleCharacters = useCallback(
  async (id) => {
    if (loading) return; 
    setLoading(true);  
    setError(null);  
    try {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch character");
      }
      const data = await response.json();
      console.log("Fetched Single Character Data:", data); 
      setCharacter(data);  
    } catch (err) {
      console.error("Error fetching single character:", err.message);  
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  },
  [loading]
);


  return {
    characters,  
    fetchCharacters, 
    fetchSingleCharacters,
    character,
    loading,  
    error,  
  };
};

export default useCharactersViewModel;
