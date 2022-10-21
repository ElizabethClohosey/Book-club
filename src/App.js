
import { React, useState, useEffect } from "react";

import Header from "./components/layout/header";
import SinglePageApp from "./components/single-page-app";
import Version from "./components/common/version";
// import Home from "./components/pages/home"
// import BookSearch from "./components/pages/book-search";
// import Footer from "./components/layout/footer";


import "./App.css"
function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {

  }, []);

  return (
    // <div className={`App ${darkMode ? "app-dark" : undefined}`}>
    <div className={`App ${darkMode ? "app-dark" : ""}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SinglePageApp />
      <Version />
      {/* <Home /> */}
      {/* <BookSearch /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
