import { useState, useEffect } from "react";
import { styles } from "./styles";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Priority from "./components/Priority";

function App() {
  return (
    <div className="relative z-0">
      <Hero />
      <SearchBox />
      <Priority />
    </div>
  );
}

export default App;
