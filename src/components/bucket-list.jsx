import React from "react";
import BookCard from "./common/book-card";

const BucketList = ({ bucketListBooks }) => {
  console.log(bucketListBooks);
  return (
    <section className="bucket-list">
      {Object.keys(bucketListBooks).length > 0 &&
        bucketListBooks.map((volume, index) => (
          <div key={volume.id} className="book-card-wrapper">
            <BookCard
              // handleClick={() => handleBookClick(volume)}
              // handleKeyDown={(e) => openModalOnEnter(volume, e)}
              title={volume.volumeInfo.title}
              author={
                volume.volumeInfo.authors ? volume.volumeInfo.authors[0] : "N/A"
              }
              imgSrc={
                volume.volumeInfo.imageLinks &&
                volume.volumeInfo.imageLinks.thumbnail
                  ? volume.volumeInfo.imageLinks.thumbnail
                  : "#"
              }
            />
            {/* <button onClick={() => addToBucketList(index)}>Add</button> */}
          </div>
        ))}
    </section>
  );
};
export default BucketList;
