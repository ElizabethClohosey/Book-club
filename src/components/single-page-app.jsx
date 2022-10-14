import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BookSearch from "./pages/book-search";

const SinglePageApp = () => {
  return (
    <main>
      <BookSearch />
    </main>
  );
};
export default SinglePageApp;
