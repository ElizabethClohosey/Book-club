import React, { useState } from "react";
import BookCard from "./common/book-card";

const ReadList = ({
  bucketListBooks,
  handleUserMessage,
  handleBookClick,
  openModalOnEnter,
}) => {
  const [randomBook, setRandomBook] = useState({});
  const getRandomBook = () => {
    if (bucketListBooks && bucketListBooks.length > 1) {
      setRandomBook(
        bucketListBooks[Math.floor(Math.random() * bucketListBooks.length)]
      );
    } else {
      console.log("No random book for you");
      handleUserMessage({
        type: "",
        message: "Your Book Bucket List is empty",
        isErr: true,
      });
    }
  };

  return (
    <section className="section-content">
      <div className="random-book">
        <p>Trouble choosing a book? </p>
        <p>Let us choose a book from your bucket list for you!</p>
        {/* <form style={{ display: "flex", flexDirection: "column" }}>
          <label>
            <input type="radio" name="random-book"></input>Bucket List Book
          </label>
          <label>
            <input type="radio" name="random-book"></input>Totally Random Book
          </label>
        </form> */}
        {Object.keys(randomBook).length > 0 && (
          <>
            <div className="book-card-wrapper">
              <BookCard
                handleClick={() => handleBookClick(randomBook)}
                handleKeyDown={(e) => openModalOnEnter(randomBook, e)}
                title={randomBook.volumeInfo.title}
                author={
                  randomBook.volumeInfo.authors
                    ? randomBook.volumeInfo.authors[0]
                    : "N/A"
                }
                imgSrc={
                  randomBook.volumeInfo.imageLinks &&
                  randomBook.volumeInfo.imageLinks.thumbnail
                    ? randomBook.volumeInfo.imageLinks.thumbnail
                    : "#"
                }
              />
            </div>
          </>
        )}
      </div>
      <button className="btn responsive" onClick={getRandomBook}>
        Find Next Book
      </button>
    </section>
  );
};
export default ReadList;
