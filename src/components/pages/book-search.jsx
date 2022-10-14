import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { MdSearch } from "react-icons/md";
import TextInput from "../form/text-input";
import BookCard from "../common/book-card";

const BookSearch = () => {
  const searchRef = useRef(null);

  const [searchResults, setSearchResults] = useState({});
  console.log(searchResults);
  const findBooks = async (e) => {
    e.preventDefault();
    if (searchRef.current.value) {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${searchRef.current.value}&printType=books&startIndex=0&maxResults=10`
      );
      setSearchResults(result.data.items);
      searchRef.current.value = "";
    } else {
      console.log("Nope");
      // setIsInputValid(false);
      // setUserMessage({
      //   type: "TBR_FORM_MESSAGE",
      //   message: "Please add search criteria",
      // });
      // setIsMessageErr(true);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <form>
        <TextInput ref={searchRef} isValid={true} />
        <button onClick={findBooks}>{/* <MdSearch /> */} Search</button>
      </form>
      <section className="search-results">
        {Object.keys(searchResults).length > 0 &&
          searchResults.map((volume) => (
            <div key={volume.id} className="book-card-wrapper">
              <BookCard
                title={volume.volumeInfo.title}
                author={
                  volume.volumeInfo.authors
                    ? volume.volumeInfo.authors[0]
                    : "N/A"
                }
                imgSrc={
                  volume.volumeInfo.imageLinks &&
                  volume.volumeInfo.imageLinks.thumbnail
                    ? volume.volumeInfo.imageLinks.thumbnail
                    : "#"
                }
                // handleClick={() => handleBookClick(volume, index)}
              />
              {/* Will open modal asking where to add book */}
              <button>Add</button>
            </div>
          ))}
      </section>
    </>
  );
};
export default BookSearch;
