import React, { useContext, useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { serverurl } from "../../URl/Server";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { userContext } from "../../store/Context";
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
  const { user } = useContext(userContext);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [department, setDepartment] = useState(user.department);
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 470,
    margin: "20px auto",
    borderRadius: "7px",
  };
  const avatarStyle = { backgroundColor: "#4f88ab" };
  let id = user._id;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = { id, name, phone, email, department };
    axios.put(`${serverurl}api/user/update`, data).then((res) => {
      console.log(res);
      if (res.data.message === "success") {
        alert('update successfully')
        navigate("/home");
      } else {
      alert("Oops something went to wrong")
      }
    });
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              type={"email"}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Department"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ width: 400, marginTop: 5 }}
              onClick={handleUpdate}
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
