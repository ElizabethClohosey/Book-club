import React, { useState } from "react";
import BookCard from "./common/book-card";
// import { MdDelete } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { GiSpellBook } from "react-icons/gi";

const BucketList = ({
  bucketListBooks,
  handleBookClick,
  openModalOnEnter,
  removeFromBucketList,
  addToReadList,
  handleUserMessage,
}) => {
  const [showList, setShowList] = useState(true);

  const handleRead = (volume, index) => {
    handleUserMessage({
      type: "",
      message: `${volume.volumeInfo.title} added to 'Read' list`,
    });
    addToReadList(volume, index);
  };

  const handleDelete = (volume, index) => {
    console.log(volume);
    handleUserMessage({
      type: "",
      message: `${volume.volumeInfo.title} removed from 'Bucket' list`,
      isErr: false,
      hasIcon: true,
    });
    removeFromBucketList(index);
  };
  return (
    <section className="section-content">
      <button className="list-btns" onClick={() => setShowList(!showList)}>
        {showList ? "Hide Book Bucket List" : "Show Book Bucket List"}
      </button>

      {showList && (
        <div className="list-wrapper">
          <section className="list-section">
            {Object.keys(bucketListBooks).length > 0 ? (
              <section>
                {/* <h3>Book Bucket List</h3> */}
                <div className="list-instructions">
                  <p>Page instructions will live here</p>
                </div>
                <hr className="dark" />
                <section className="bucket-list">
                  {bucketListBooks.map((volume, index) => (
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
                      <div className="btn-bar">
                        <button onClick={() => handleRead(volume, index)}>
                          <FaBook
                            onClick={(e) =>
                              handleUserMessage({
                                message: "Functionality coming soon",
                              })
                            }
                          />
                        </button>
                        <button>
                          <GiSpellBook
                            onClick={(e) =>
                              handleUserMessage({
                                message: "Functionality coming soon",
                              })
                            }
                          />
                        </button>
                        <button
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          onClick={() => handleDelete(volume, index)}
                        >
                          <BsTrashFill className="delete-book" />
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              </section>
            ) : (
              <p>
                This list is empty
                <br />
                Use the search bar to add books to your list
              </p>
            )}
          </section>
        </div>
      )}
    </section>
  );
};
export default BucketList;
