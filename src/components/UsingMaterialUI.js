import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "../styles/using-material-ui.css";

const UsingMaterialUI = ({ materialMessage }) => {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");

  // useState for the rating Material UI
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    console.log(event.target.value);

    setNewItem(event.target.value);
  };

  const handleAdd = () => {
    console.log("This is Working");

    setItem([...item, newItem]);
    setNewItem("");
  };

  // onChange function for rating system
  const handleRatingChange = (event, newValue) => {
    console.log("This is the event", event);
    console.log("This is the newValue", newValue);
    setValue(newValue);
  };

  return (
    <div className="whole-component">
      <h1>Using Material UI</h1>
      <h4>{materialMessage}</h4>
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="on"
        ></Box>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          onChange={handleChange}
          value={newItem}
        />
        <Button variant="outlined" onClick={handleAdd}>
          Add Item
        </Button>
        <ul>{item}</ul>
        <p>What you type appears here: {newItem}</p>
      </div>
      <div className="rating-section">
        <Typography component="legend">Give It A Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          //   onChange={(event, newValue) => {
          //     setValue(newValue);
          //   }}
          onChange={handleRatingChange}
        />
      </div>
    </div>
  );
};

export default UsingMaterialUI;
