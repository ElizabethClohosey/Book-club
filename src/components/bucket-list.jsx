import React, { useState } from "react";
import BookCard from "./common/book-card";
import { MdDelete } from "react-icons/md";

const BucketList = ({
  bucketListBooks,
  handleBookClick,
  openModalOnEnter,
  removeFromBucketList,
  addToReadList,
  handleUserMessage,
}) => {
  const [showList, setShowList] = useState(true);
  // console.log(bucketListBooks);

  const handleRead = (volume, index) => {
    handleUserMessage({
      type: "",
      message: "[Book name] added to 'Read' list",
    });
    addToReadList(volume, index);
  };

  const handleDelete = (index) => {
    handleUserMessage({
      type: "",
      message: "[Book name] removed from 'Bucket' list",
      isErr: false,
    });
    removeFromBucketList(index);
  };
  return (
    <section className="section-content">
      <button className="list-btns" onClick={() => setShowList(!showList)}>
        {showList ? "Hide Book Bucket List" : "Show Book Bucket List"}
      </button>
      {showList && (
        <section className="bucket-list">
          {Object.keys(bucketListBooks).length > 0 ? (
            bucketListBooks.map((volume, index) => (
              <div key={volume.id} className="book-card-wrapper">
                <BookCard
                  handleClick={() => handleBookClick(volume)}
                  handleKeyDown={(e) => openModalOnEnter(volume, e)}
                  key={volume.id}
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
                <div
                  className="card-btn-bar"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button onClick={() => handleRead(volume, index)}>
                    Read
                  </button>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>
              This list is empty
              <br />
              Use the search bar to add books to your list
            </p>
          )}
        </section>
      )}
    </section>
  );
};
export default BucketList;
