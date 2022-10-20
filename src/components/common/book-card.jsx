import React from "react";

const BookCard = ({
  title,
  author,
  imgSrc,
  isLargeCard,
  handleClick,
  handleKeyDown,
}) => {
  return (
    <div
      tabIndex={0}
      className="book-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="book-card-header">
        <img src={imgSrc ? imgSrc : ""} alt="book cover" />
      </div>
      <div className="book-card-content">
        <p>
          <strong>
            {!isLargeCard && title.length > 12
              ? title.slice(0, 12) + "..."
              : title}
          </strong>
        </p>
        <p>
          {!isLargeCard && author.length > 10
            ? author.slice(0, 10) + "..."
            : author}
        </p>
      </div>
    </div>
  );
};

export default BookCard;

// const BookCard = ({
//   cardHeader,
//   cardBody,
//   cardFooter,
//   isSmallCard,
//   // hasImage,
//   imgSrc,
// }) => {
//   console.log(imgSrc);
//   return (
//     <div className={`card-wrapper ${isSmallCard ? "sm-card" : "lg-card"}`}>
//       <div className="card">
//         <div className="card-header">
//           {imgSrc ? <img src={imgSrc} alt="book cover" /> : <p>{cardHeader}</p>}
//         </div>
//         <div>
//           <div className="card-body">{cardBody}</div>
//           <div className="card-footer">{cardFooter}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;
