import React, { useState } from "react";
import BookCard from "./common/book-card";

const ReadList = ({ bucketListBooks, handleUserMessage }) => {
  const [randomBook, setRandomBook] = useState({});
  const getRandomBook = () => {
    if (bucketListBooks && bucketListBooks.length > 1) {
      setRandomBook(
        bucketListBooks[Math.floor(Math.random() * bucketListBooks.length)]
      );
      handleUserMessage(null);
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
      <div>
        <p>
          Trouble choosing a book? Click the button below to get a random book
          from your "Read" list.
        </p>
        {Object.keys(randomBook).length > 0 && (
          <>
            <div className="book-card-wrapper random-book">
              <BookCard
                // handleClick={() => handleBookClick(volume)}
                // handleKeyDown={(e) => openModalOnEnter(volume, e)}
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

        <button className="btn responsive" onClick={getRandomBook}>
          Find Next Book
        </button>
      </div>
    </section>
  );
};
export default ReadList;
