import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EditButton = (props) => {
  return (
    <Link to={props.backlink}>
      <Button sx={{ fontSize: "13px" }}>Edit Channel</Button>
    </Link>
  );
};

export default EditButton;
