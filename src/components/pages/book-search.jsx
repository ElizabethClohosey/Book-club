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

  const findBooks = async (e) => {
    e.preventDefault();
    if (searchRef.current.value) {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${searchRef.current.value}&printType=books&startIndex=0&maxResults=10`
      );
      handleSearchResults(result.data.items);
      searchRef.current.value = "";
    } else {
      handleUserMessage({
        type: "TESTING",
        message: "Add some search criteria",
        isErr: true,
      });
    }
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
        {Object.keys(searchResults).length > 0 ? (
          searchResults.map((volume, index) => (
            <div key={volume.id} className="book-card-wrapper">
              <BookCard
                handleClick={() => handleBookClick(volume)}
                handleKeyDown={(e) => openModalOnEnter(volume, e)}
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
              />
              <button onClick={() => addToBucketList(volume, index)}>Add</button>
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
