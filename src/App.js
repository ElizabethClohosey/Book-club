
import { React, useEffect } from "react";

import Header from "./components/layout/header";
import Home from "./components/pages/home"
import Footer from "./components/layout/footer";


import "./App.css"
function App() {

  useEffect(() => {

  }, []);

  return (
    // <div className={`App ${darkMode ? "app-dark" : undefined}`}>
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
