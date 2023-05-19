import React from "react";
import { Sidebar, Stepper, DropdownBox, BackNext } from "../components";
import "../styles/pageStyles/homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="homepage">
        <Sidebar />
        <div className="models">
          <BackNext />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
