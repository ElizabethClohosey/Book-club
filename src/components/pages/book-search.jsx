import React, { useRef } from "react";
import axios from "axios";
import TextInput from "../form/text-input";
import BookCard from "../common/book-card";

const BookSearch = ({
  handleSearchResults,
  searchResults,
  addToBucketList,
  handleBookClick,
  openModalOnEnter,
  handleUserMessage,
}) => {
  const searchRef = useRef(null);
  console.log(searchResults);

  const findBooks = async (e) => {
    e.preventDefault();

    try {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${searchRef.current.value}&printType=books&startIndex=0&maxResults=40`
      );

      if (!result.data.items) {
        console.log("Argh");
        handleUserMessage({
          message:
            "Unable to locate book.  Update your search criteria and try again.",
          isErr: true,
        });
      } else {
        handleSearchResults(result.data.items);
      }
    } catch (err) {
      console.log("Request Error", err);
      console.log(err.response.data.error.message);
      handleUserMessage({
        message: err.response.data.error.message,
        isErr: true,
      });
    }

    // if (result) {
    //   handleSearchResults(result.data.items);
    //   searchRef.current.value = "";
    // } else if (!searchRef.current.value && !result) {
    //   handleUserMessage({ message: "Please add search criteria", isErr: true });
    // } else {
    //   handleSearchResults([]);
    //   handleUserMessage({ message: "Unable to locate book", isErr: true });
    // }
    // if (searchRef.current.value) {
    //   const result = await axios(
    //     `https://www.googleapis.com/books/v1/volumes?q=${searchRef.current.value}&printType=books&startIndex=0&maxResults=10`
    //   );
    //   handleSearchResults(result.data.items);
    //   searchRef.current.value = "";
    // } else {
    //   handleUserMessage({
    //     type: "TESTING",
    //     message: "Add some search criteria",
    //     isErr: true,
    //   });
    // }
  };

  return (
    <section className="section-content">
      <form>
        <TextInput
          ref={searchRef}
          label="Search by book Title or Author"
          isValid={true}
          focusOnLoad={true}
        />
        <button className="btn responsive" onClick={findBooks}>
          {/* <MdSearch /> */} Search
        </button>
      </form>
      <hr className="dark" />
      <section className="search-results">
        {searchResults && Object.keys(searchResults).length > 0 ? (
          searchResults.map((volume, index) => (
            <div key={volume.id} className="book-card-wrapper">
              <BookCard
                handleClick={() => handleBookClick(volume)}
                handleKeyDown={(e) => openModalOnEnter(volume, e)}
                title={
                  volume.volumeInfo.title ? volume.volumeInfo.title : "N/A"
                }
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
              />
              <button onClick={() => addToBucketList(volume, index)}>
                Add
              </button>
            </div>
          ))
        ) : (
          <p>
            Your search results will show here.
            <br />
            Use the search input above to search for books to add to your lists.
          </p>
        )}
      </section>
    </section>
  );
};
export default BookSearch;
