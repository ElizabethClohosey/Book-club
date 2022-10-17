import React, { useState } from "react";
import BookCard from "./common/book-card";

const ReadList = ({ bucketListBooks, handleUserMessage }) => {
  console.log(bucketListBooks);
  const [randomBook, setRandomBook] = useState({});
  console.log(randomBook);
  const getRandomBook = (testing) => {
    // let randomBook = {};
    if (bucketListBooks && bucketListBooks.length > 1) {
      setRandomBook(
        bucketListBooks[Math.floor(Math.random() * bucketListBooks.length)]
      );
      // randomBook =
      //   bucketListBooks[Math.floor(Math.random() * bucketListBooks.length)];

      // setUserMessage(null);
      handleUserMessage(null);
    } else {
      console.log("No random book for you");
      handleUserMessage({
        type: "",
        message: "No random book for you!",
        isErr: true,
      });
      // setIsMessageErr(true);
      // setUserMessage({
      //   type: "RANDOM_BOOK_MESSAGE",
      //   message: `Add some books to your "To Be Read" list"`,
      // });
      // if (userMessage) {
      //   userMessageRef.current.scrollIntoView();
      // }
    }
    console.log(randomBook);
  };

  return (
    <section className="random-book-section">
      <h2>Get Random Book</h2>
      <div>
        <p>
          Trouble choosing a book? Click the button below to get a random book
          from your "To Be Read" list.
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
        {/* <div>
          {userMessage && userMessage.type === "RANDOM_BOOK_MESSAGE" ? (
            <div>
              <UserMessage message={userMessage} isErrMessage={isMessageErr} />
            </div>
          ) : (
            <>
              {Object.keys(randomBook).length > 0 && (
                <>
                  <div className="book-card-wrapper random-book">
                    <BookCard
                      title={randomBook.title}
                      author={randomBook.author}
                      genre={randomBook.genre}
                      imgSrc={randomBook.img}
                      isLargeCard={true}
                    />
                  </div>
                </>
              )}
              <br />
              <br />
            </>
          )}
        </div> */}

        <button className="btn" onClick={getRandomBook}>
          Find Next Book
        </button>
      </div>
    </section>
  );
};
export default ReadList;
