import React, { useState } from "react";
import BookCard from "./common/book-card";

const ReadList = ({ readList }) => {
  console.log(readList);
  const [showList, setShowList] = useState(true);
  return (
    <section className="list-wrapper">
      <button className="list-btn" onClick={() => setShowList(!showList)}>
        {showList ? "Hide Read List" : "Show Read List"}
      </button>
      {showList && (
        <section className="read-list">
          {Object.keys(readList).length > 0 ? (
            readList.map((volume) => (
              <div key={volume.id} className="book-card-wrapper">
                <BookCard
                  //  handleClick={() => handleBookClick(volume)}
                  //  handleKeyDown={(e) => openModalOnEnter(volume, e)}

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
              </div>
            ))
          ) : (
            <p>Testing Read List</p>
          )}
        </section>
      )}
    </section>
  );
};
export default ReadList;
