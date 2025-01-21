import React from "react";
import "./Hero.scss";

const BlobAnimation = ({ size = "20vw", color = "#a63fff" }) => {
  const blobStyle = {
    "--blob-size": size,
    "--blob-color": color,
  };

  return (
    <div className="blobs" style={blobStyle}>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
    </div>
  );
};

export default BlobAnimation;
