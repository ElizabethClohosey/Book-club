import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { MdSearch } from "react-icons/md";
import TextInput from "../form/text-input";
import BookCard from "../common/book-card";
import Modal from "../common/modal";

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
      // setSearchResults(result.data.items);
      handleSearchResults(result.data.items);
      searchRef.current.value = "";
      handleUserMessage(null);
    } else {
      console.log("Nope");
      // setIsInputValid(false);
      // setUserMessage({
      //   type: "TBR_FORM_MESSAGE",
      //   message: "Please add search criteria",
      // });
      // setIsMessageErr(true);
      handleUserMessage({
        type: "TESTING",
        message: "testing - add serach shit",
        isErr: true,
      });
    }
  };

  // const [expandedBook, setExpandedBook] = useState({});
  // const handleBookClick = (volume) => {
  //   console.log("Opening modal with seleted book information");
  //   setExpandedBook(volume);
  //   setShowModal(true);
  // };

  // const [showModal, setShowModal] = useState(false);
  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  // const openModalOnEnter = (volume, e) => {
  //   if (e.key === "Enter") {
  //     console.log("do validate");
  //     setExpandedBook(volume);
  //     setShowModal(true);
  //   }
  // };

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (showModal) {
  //     // Disable scroll
  //     body.style.overflow = "hidden";
  //   } else {
  //     // Enable scroll
  //     body.style.overflow = "auto";
  //   }
  // }, [showModal]);

  return (
    <>
      <form>
        <TextInput ref={searchRef} isValid={true} />
        <button onClick={findBooks}>{/* <MdSearch /> */} Search</button>
      </form>
      <section className="search-results">
        {Object.keys(searchResults).length > 0 &&
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
              <button onClick={() => addToBucketList(index)}>Add</button>
            </div>
          ))}
      </section>
      {/* {showModal && (
        <Modal
          modalHeader={
            <>
              <img
                src={expandedBook.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
              ></img>
              <p>{expandedBook.volumeInfo.averageRating} Star Rating</p>
            </>
          }
          body={
            <>
              <strong>
                <p>{expandedBook.volumeInfo.title}</p>
              </strong>

              <p>{expandedBook.volumeInfo.authors}</p>
              <p>
                {expandedBook.volumeInfo.description
                  ? expandedBook.volumeInfo.description
                  : "No description available"}
              </p>
            </>
          }
          handleModalClose={handleModalClose}
        />
      )} */}
    </>
  );
};
export default BookSearch;
