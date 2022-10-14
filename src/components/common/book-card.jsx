const BookCard = ({ cardHeader, cardBody, cardFooter, isSmallCard }) => {
  return (
    <div className={`card-wrapper ${isSmallCard ? "sm-card" : "lg-card"}`}>
      <div className="card">
        <div className="card-header">{cardHeader}</div>
        <div className="card-body">{cardBody}</div>
        <div className="card-footer">{cardFooter}</div>
      </div>
    </div>
  );
};

export default BookCard;
