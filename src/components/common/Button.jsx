import React from "react";

const Button = ({ icon, name }) => {
  return (
    <button className="reusableButtonStyles">
      {icon}
      <span>{name}</span>
    </button>
  );
};

export default Button;
