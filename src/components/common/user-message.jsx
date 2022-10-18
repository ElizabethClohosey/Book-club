import React, { forwardRef, useEffect, useState } from "react";

const UserMessage = forwardRef(
  ({ message, isErrMessage, isMessageVisible }, ref) => {
    console.log(isMessageVisible);
    console.log(message);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
      // if (timedMessage) {
      setShowMessage(true);
      // }

      const timeId = setTimeout(() => {
        setShowMessage(!setShowMessage);
      }, 3000);

      return () => {
        clearTimeout(timeId);
      };
    }, [isMessageVisible]);
    return (
      <>
        {showMessage && (
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
  }
);

export default UserMessage;
