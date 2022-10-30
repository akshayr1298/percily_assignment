import React, { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { serverurl } from "../../URl/Server";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 470,
    margin: "20px auto",
    borderRadius: "7px",
  };
  const avatarStyle = { backgroundColor: "#4f88ab" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setEmail("")
    setPassword("")

    await axios
      .post(`${serverurl}api/user`, data)
      .then((res) => {
        console.log(res);
        navigate('/home')

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid sx={{ marginTop: 12 }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align={"center"}>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
          <TextField
            type={'email'}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 400 }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type={"password"}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: 400, marginTop: 3 }}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ width: 400, marginTop: 5 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
