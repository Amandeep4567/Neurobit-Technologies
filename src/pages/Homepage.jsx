import React from "react";
import { Sidebar, Stepper, DropdownBox, BackNext } from "../components";

const Homepage = () => {
  return (
    <div>
      <div className="homepage">
        <Sidebar />
        <div className="models">
          <DropdownBox />
          <BackNext />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
