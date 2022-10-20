import React, { useState } from "react";
import BookCard from "./common/book-card";

const ReadList = ({ readList }) => {
  const [showList, setShowList] = useState(true);
  return (
    <section className="section-content">
      <button className="list-btns" onClick={() => setShowList(!showList)}>
        {showList ? "Hide Read List" : "Show Read List"}
      </button>

      {showList && (
        <div className="list-wrapper">
          <section className="list-section">
            {Object.keys(readList).length > 0 ? (
              <section>
                {/* <h3>Read List</h3> */}
                <div className="list-instructions">
                  <p>Page instructions will live here</p>
                </div>
                <hr className="dark" />
                {readList.map((volume) => (
                  <section className="read-list">
                    <div key={volume.id} className="book-card-wrapper">
                      <BookCard
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
                  </section>
                ))}
              </section>
            ) : (
              <>
                <p>
                  This list is empty <br />
                  Get started on your Book Bucket List!
                </p>

                <p></p>
              </>
            )}
          </section>
        </div>
      )}
    </section>
  );
};
export default ReadList;
