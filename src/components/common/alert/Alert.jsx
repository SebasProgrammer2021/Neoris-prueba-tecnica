import React from "react";

const Alert = ({ handleClose, message }) => {
  return (
    <div className="alertContainer">
      <div className="alertMessageStyles" data-testid="alertTestID">
        <button onClick={handleClose}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/macos-close.png"
            alt="close icon btn"
          />
        </button>
        <p data-testid="alertMainMessage">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
