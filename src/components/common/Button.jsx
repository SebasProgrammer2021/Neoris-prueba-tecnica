import React from "react";

const Button = ({
  customStyles,
  disabled,
  handleFunction,
  icon,
  name,
  testid,
}) => {
  return (
    <button
      className={`${customStyles ? customStyles : "reusableButtonStyles"}`}
      data-testid={testid}
      disabled={disabled}
      onClick={handleFunction}
    >
      <img src={icon} alt="" />
      <span>{name}</span>
    </button>
  );
};

export default Button;
