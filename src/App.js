import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Components/Characters";
import Character from "./Components/Character";
import useCharactersViewModel from "./viewModel/CharactersViewModel";
import Home from "./Components/Home";

function App() {
    const { characters, fetchCharacters, loading, error } =
    useCharactersViewModel();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Characters characters={characters} />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;