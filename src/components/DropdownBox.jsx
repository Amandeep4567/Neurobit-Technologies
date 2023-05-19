import React from "react";
import file from "../assets/file.png";
import "../styles/CompStyles/dropdown.css";

const DropdownBox = () => {
  return (
    <div className="dropdown">
      <div className="big_reactangle">
        <div className="small_reactangle">
          <img src={file} alt="file" />
        </div>
      </div>
    </div>
  );
};

export default DropdownBox;
