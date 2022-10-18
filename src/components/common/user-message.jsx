import React, { forwardRef, useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const UserMessage = forwardRef(
  ({ message, isErrMessage, isMessageVisible, hasIcon }, ref) => {
    console.log(isMessageVisible);
    console.log(message);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
      setShowMessage(true);

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
            {message && (
              <div
                className={`user-message ${isErrMessage ? "error" : "success"}`}
                ref={ref}
              >
                {hasIcon && <FaExclamationCircle />} <p>{message}</p>
                {hasIcon && <FaExclamationCircle />}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
);

export default UserMessage;
