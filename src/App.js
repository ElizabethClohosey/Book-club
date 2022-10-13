
import { React, useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/layout/header";
import Home from "./components/pages/home"
import Footer from "./components/layout/footer";


import "./App.css"
function App() {
  const [isLoading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {

  }, []);

  return (
    <div className={`App ${darkMode ? "app-dark" : undefined}`}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
