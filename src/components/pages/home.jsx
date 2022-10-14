import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { MdSearch } from "react-icons/md";
import BookSearch from "../pages/book-search";

const Home = () => {
  return (
    <main style={{ background: "pink" }}>
      <h1>This will eventually be the home page</h1>
      <BookSearch />
    </main>
  );
};
export default Home;
