import React from "react";
import cl from "./SearchInput.module.css";

const SearchInput = ({ text }) => {
  return (
    <input
      type="text"
      className={[cl.input, cl.input_address].join(" ")}
      placeholder={text}
    />
  );
};

export default SearchInput;
