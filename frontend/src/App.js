import React from "react";
import "./App.css";
import { portfolioData } from "./data/mock";
import Header from "./components/portfolio/Header";
import HeroAbout from "./components/portfolio/HeroAbout";
import Sections from "./components/portfolio/Sections";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroAbout data={portfolioData} />
        <Sections data={portfolioData} />
      </main>
    </div>
  );
}

export default App;
