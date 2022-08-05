import React from "react";

const Button = ({ customStyles, disabled, handleFunction, icon, name }) => {
  return (
    <button
      className={`${customStyles ? customStyles : "reusableButtonStyles"}`}
      disabled={disabled}
      onClick={handleFunction}
    >
      <img src={icon} alt="" />
      <span>{name}</span>
    </button>
  );
};

export default Button;
