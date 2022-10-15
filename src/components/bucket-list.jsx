import React, { useState } from "react";
import BookCard from "./common/book-card";
import { MdDelete } from "react-icons/md";

const BucketList = ({
  bucketListBooks,
  handleBookClick,
  openModalOnEnter,
  removeFromBucketList,
  addToReadList,
}) => {
  const [showList, setShowList] = useState(false);
  // console.log(bucketListBooks);
  return (
    <section className="list-wrapper">
      <button onClick={() => setShowList(!showList)}>
        Show Book Bucket List
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
                  <button onClick={() => addToReadList(volume, index)}>
                    Read
                  </button>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => removeFromBucketList(index)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Testing Bucket List</p>
          )}
        </section>
      )}
    </section>
  );
};
export default BucketList;
