import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    //only when background is clicked move out
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} />
    </div>
  );
};

export default Modal;
