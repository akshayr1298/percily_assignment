import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { serverurl } from "../../URl/Server";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Edit = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 470,
    margin: "20px auto",
    borderRadius: "7px",
  };
  const avatarStyle = { backgroundColor: "#4f88ab" };


  return (
    <>
      <Grid sx={{ marginTop: 12 }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align={"center"}>
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Edit Employee</h2>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: 400 }}
              required
            />
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
            />
            <TextField
              type={"email"}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
            />
            <TextField
              id="outlined-basic"
              label="Department"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ width: 400, marginTop: 5 }}
            >
              Submit
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Edit;
