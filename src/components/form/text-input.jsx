import { forwardRef } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const TextInput = forwardRef(
  ({ label, isValid, handleInputChange }, ref) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          ref={ref}
          onChange={handleInputChange}
          className={isValid ? "valid-input" : "invalid-input"}
        />
        <span className={"validation-icon"}>
          {isValid ? "" : <RiErrorWarningLine />}
        </span>
      </div>
    );
  }
);

export default TextInput;
