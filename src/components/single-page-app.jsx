import React, { useState, useReducer, useEffect } from "react";
import BucketList from "./bucket-list";
import BookSearch from "./pages/book-search";
import ReadList from "./read-list";
import RandomBook from "./random-book";
import UserMessage from "./common/user-message";
import Modal from "./common/modal";

const SinglePageApp = () => {
  const [searchResults, setSearchResults] = useState({});

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  const [bucketListBooks, dispatchBucketList] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TO_BUCKET_LIST":
        return [...state, action.selectedVolume];
      case "DELETE_FROM_BUCKET_LIST":
        return state.filter((_, index) => index !== action.index);
      default:
        return state;
    }
  }, []);

  const [readList, dispatchReadList] = useReducer((state, action) => {
    // console.log(state, action);
    switch (action.type) {
      case "ADD_TO_READ_LIST":
        return [...state, action.selectedVolume];
      default:
        return state;
    }
  }, []);

  const [userMessage, setUserMessage] = useState(null);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const handleUserMessage = (userMessage) => {
    setUserMessage(userMessage);
    setIsMessageVisible(!isMessageVisible);
  };

  const addToReadList = (volume, index) => {
    let selectedVolume = bucketListBooks[index];
    dispatchBucketList({ type: "DELETE_FROM_BUCKET_LIST", index });
    dispatchReadList({ type: "ADD_TO_READ_LIST", selectedVolume });
  };

  const addToBucketList = (volume, index) => {
    let selectedVolume = searchResults[index];
    let volumeInfo = selectedVolume.volumeInfo;

    let duplicateId = bucketListBooks.some(
      (book) => book.id === selectedVolume.id
    );
    let duplicateTitle = bucketListBooks.some(
      (book) => book.volumeInfo.title === volumeInfo.title
    );
    let duplicateAuthor = bucketListBooks.some(
      (book) => book.volumeInfo.authors[0] === volumeInfo.authors[0]
    );

    if (duplicateId || (duplicateTitle && duplicateAuthor)) {
      handleUserMessage({
        // type: "TESTING",
        message: "Unable to add duplicate book",
        isErr: true,
      });
    } else {
      dispatchBucketList({ type: "ADD_TO_BUCKET_LIST", selectedVolume });
      handleUserMessage({
        // type: "TESTING",
        message: `${volume.volumeInfo.title} added to 'Book Bucket List'`,
        isErr: false,
      });
    }
    // setRandomBook({});
  };

  const [expandedBook, setExpandedBook] = useState({});
  const handleBookClick = (volume) => {
    setExpandedBook(volume);
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
  };

  const openModalOnEnter = (volume, e) => {
    if (e.key === "Enter") {
      setExpandedBook(volume);
      setShowModal(true);
    }
  };

  const removeFromBucketList = (index) => {
    dispatchBucketList({ type: "DELETE_FROM_BUCKET_LIST", index });
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <main>
      <section className="search-section">
        <h2>Book Search</h2>
        <BookSearch
          addToBucketList={addToBucketList}
          handleSearchResults={handleSearchResults}
          searchResults={searchResults}
          handleBookClick={handleBookClick}
          // handleModalClose={handleModalClose}
          openModalOnEnter={openModalOnEnter}
          handleUserMessage={handleUserMessage}
        />
      </section>

      <section className="book-lists-section">
        <h2>Book Lists</h2>
        <BucketList
          bucketListBooks={bucketListBooks}
          handleBookClick={handleBookClick}
          // handleModalClose={handleModalClose}
          openModalOnEnter={openModalOnEnter}
          removeFromBucketList={removeFromBucketList}
          addToReadList={addToReadList}
          handleUserMessage={handleUserMessage}
        />

        <ReadList
          readList={readList}
          // handleModalClose={handleModalClose}
          openModalOnEnter={openModalOnEnter}
          handleBookClick={handleBookClick}
        />
      </section>

      <section className="random-book-section">
        <h2>Random Book Selection</h2>
        <RandomBook
          bucketListBooks={bucketListBooks}
          handleUserMessage={handleUserMessage}
          // handleModalClose={handleModalClose}
          openModalOnEnter={openModalOnEnter}
          handleBookClick={handleBookClick}
        />
      </section>

      {userMessage && (
        <UserMessage
          message={userMessage.message}
          isErrMessage={userMessage.isErr}
          isMessageVisible={isMessageVisible}
          hasIcon={userMessage.hasIcon}
        />
      )}
      {showModal && (
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
      )}
    </main>
  );
};
export default SinglePageApp;
