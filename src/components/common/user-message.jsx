import React, { forwardRef } from "react";

const UserMessage = forwardRef(({ message, isErrMessage }, ref) => {
  console.log(message);
  console.log(isErrMessage);
  // search messsage and random book message

  return (
    <>
      {message !== null && (
        <div className="user-message-wrapper">
          <div
            className={`user-message ${isErrMessage ? "error" : "success"}`}
            ref={ref}
            // className={isErrMessage ? "error" : "success"}
          >
            {message && <p stlye={{ margin: "0" }}>{message}</p>}
          </div>
        </div>
      )}
    </>
  );
});

export default UserMessage;
