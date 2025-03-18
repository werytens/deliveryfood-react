import React from "react";
import cl from "./SearchInput.module.css";

const SearchInput = ({ text, disabled }) => {
  return (
    <input
      type="text"
      className={[cl.input, cl.input_address].join(" ")}
      placeholder={text}
      disabled={disabled}
    />
  );
};

export default SearchInput;
