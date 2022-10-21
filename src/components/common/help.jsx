import React from "react";
import { BsBucketFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { GiOpenBook, GiWhiteBook } from "react-icons/gi";

const Help = () => {
  return (
    <div
      style={{ position: "absolute", bottom: "20px", background: 'white', minWidth: '400px', padding: '1rem' }}
      className="list-instructions"
    >
      <p>
        <span>
          <BsBucketFill />
        </span>
        Adds book to "Book Bucket List"
      </p>
      <p>
        <span>
          <GiOpenBook />
        </span>
        Adds book to "Current Book Club Book"
      </p>
      <p>
        <span>
          <FaBook />
        </span>
        Adds book to "Read"
      </p>
      <p>Click on book cover to see more information</p>
    </div>
  );
};

export default Help;
