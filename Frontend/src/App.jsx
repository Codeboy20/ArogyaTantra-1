import React from "react";
import Navbar from "./Components/Navbar" // Importing Navbar component
import Hero from "./Components/Hero"; // Importing Hero component

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
