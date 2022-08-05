import React from "react";

const Alert = ({ message }) => {
  return (
    <div data-testid="alertTestID">
      <p data-testid="alertMainMessage">{message}</p>
    </div>
  );
};

export default Alert;
