import React, { forwardRef } from "react";

const UserMessage = forwardRef(({ message, isErrMessage }, ref) => {

  return (
    <>
      {message !== null && (
        <div className="user-message-wrapper">
          <div
            className={`user-message ${isErrMessage ? "error" : "success"}`}
            ref={ref}
          >
            {message && <p stlye={{ margin: "0" }}>{message}</p>}
          </div>
        </div>
      )}
    </>
  );
});

export default UserMessage;
