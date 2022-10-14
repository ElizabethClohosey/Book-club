import React, { useState, useReducer } from "react";
import BucketList from "./bucket-list";
import BookSearch from "./pages/book-search";

const SinglePageApp = () => {
  const [searchResults, setSearchResults] = useState({});
  console.log(searchResults);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  const [bucketListBooks, dispatchBucketList] = useReducer((state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "testing":
        return [...state, action.selectedVolume];
      default:
        return state;
    }
    // switch (action.type) {
    //   case "ADD_TO_TO_BE_READ":
    //     return [
    //       ...state,
    //       {
    //         id: action.id,
    //         title: action.title,
    //         author: action.author,
    //         genre: action.genre,
    //         img: action.img,
    //       },
    //     ];
    //   case "REMOVE_FROM_TO_BE_READ":
    //     setUserMessage(null);
    //     setRandomBook([]);
    //     return state.filter((_, index) => index !== action.index);
    //   default:
    //     return state;
    // }
  }, []);
  console.log(bucketListBooks);

  const addToBucketList = (index) => {
    console.log(index);
    console.log(searchResults[index]);
    let selectedVolume = searchResults[index];

    let volumeInfo = selectedVolume.volumeInfo;
    console.log(volumeInfo);

    let duplicateId = bucketListBooks.some(
      (book) => book.id === selectedVolume.id
    );
    let duplicateTitle = bucketListBooks.some(
      (book) => book.title === volumeInfo.title
    );

    if (duplicateId || duplicateTitle) {
      console.log("Duplicate Book");
      // setUserMessage({
      //   type: "TBR_FORM_MESSAGE",
      //   message: "Unable to add duplicate book to list",
      // });
      // setIsMessageErr(true);
    } else {
      dispatchBucketList({ type: "testing", selectedVolume });
      // setUserMessage({
      //   type: "TBR_FORM_MESSAGE",
      //   message: `${volumeInfo.title} added to "To Be Read" List`,
      // });
      // setIsMessageErr(false);
      // setIsInputValid(true);
    }
    // setRandomBook({});
  };

  return (
    <main>
      <BookSearch
        addToBucketList={addToBucketList}
        handleSearchResults={handleSearchResults}
        searchResults={searchResults}
      />
    </main>
  );
};
export default SinglePageApp;
