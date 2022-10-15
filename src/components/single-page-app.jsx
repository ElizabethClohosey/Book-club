import React, { useState, useReducer, useEffect } from "react";
import BucketList from "./bucket-list";
import BookSearch from "./pages/book-search";
import ReadList from "./read-list";
import Modal from "./common/modal";

const SinglePageApp = () => {
  const [searchResults, setSearchResults] = useState({});
  // console.log(searchResults);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  const [bucketListBooks, dispatchBucketList] = useReducer((state, action) => {
    // console.log(state, action);
    switch (action.type) {
      case "ADD_TO_BUCKET_LIST":
        return [...state, action.selectedVolume];
      case "DELETE_FROM_BUCKET_LIST":
        // setUserMessage(null);
        // setRandomBook([]);
        return state.filter((_, index) => index !== action.index);
      default:
        return state;
    }
  }, []);

  const [readList, dispatchReadList] = useReducer((state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "ADD_TO_READ_LIST":
        // console.log("will this work?");
        // return state.filter((_, index) => index === action.index);
        return [...state, action.selectedVolume];
      default:
        return state;
    }
  }, []);
  console.log(readList);

  // const [readList, setReadList] = useState([]);
  const addToReadList = (volume, index) => {
    let selectedVolume = bucketListBooks[index];
    console.log(selectedVolume);
    // console.log("Volume: ", volume, "Index: ", index);
    dispatchBucketList({ type: "DELETE_FROM_BUCKET_LIST", index });
    dispatchReadList({ type: "ADD_TO_READ_LIST", selectedVolume });
  };

  const addToBucketList = (index) => {
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
      console.log("Duplicate Book");
      // setUserMessage({
      //   type: "TBR_FORM_MESSAGE",
      //   message: "Unable to add duplicate book to list",
      // });
      // setIsMessageErr(true);
    } else {
      dispatchBucketList({ type: "ADD_TO_BUCKET_LIST", selectedVolume });
      // setUserMessage({
      //   type: "TBR_FORM_MESSAGE",
      //   message: `${volumeInfo.title} added to "To Be Read" List`,
      // });
      // setIsMessageErr(false);
      // setIsInputValid(true);
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
    let selectedVolume = searchResults[index];
    console.log("Deleting book at index", index);
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
      <BookSearch
        addToBucketList={addToBucketList}
        handleSearchResults={handleSearchResults}
        searchResults={searchResults}
        handleBookClick={handleBookClick}
        handleModalClose={handleModalClose}
        openModalOnEnter={openModalOnEnter}
      />
      <BucketList
        bucketListBooks={bucketListBooks}
        handleBookClick={handleBookClick}
        handleModalClose={handleModalClose}
        openModalOnEnter={openModalOnEnter}
        removeFromBucketList={removeFromBucketList}
        addToReadList={addToReadList}
      />
      <ReadList readList={readList} />
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
