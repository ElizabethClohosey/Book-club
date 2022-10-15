
import { React, useEffect } from "react";

import Header from "./components/layout/header";
import SinglePageApp from "./components/single-page-app";
// import Home from "./components/pages/home"
// import BookSearch from "./components/pages/book-search";
import Footer from "./components/layout/footer";


import "./App.css"
function App() {

  useEffect(() => {

  }, []);

  return (
    // <div className={`App ${darkMode ? "app-dark" : undefined}`}>
    <div className="App">
      <Header />
      <SinglePageApp />
      {/* <Home /> */}
      {/* <BookSearch /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
