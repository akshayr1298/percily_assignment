import React, { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { serverurl } from "../../URl/Server";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Add = () => {
  
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [department,setDepartment] = useState('')
  const navigate = useNavigate()

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 470,
    margin: "20px auto",
    borderRadius: "7px",
  };
  const avatarStyle = { backgroundColor: "#4f88ab" };

  const addEmployee = async(e)=>{
    e.preventDefault()
    const data  = {name,phone,email,department}
    setName("")
    setPhone("")
    setEmail("")
    setDepartment("")
    await axios.post(`${serverurl}api/user/addemplyee`,data).then((res)=>{
        console.log(res);
        navigate('/home')

    })
  }

  return (
    <div>
      <Grid sx={{ marginTop: 12 }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align={"center"}>
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Add Employee</h2>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: 400 }}
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField
              type={'number'}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              sx={{ width: 400, marginTop: 3}}
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
            <TextField
              type={"email"}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Department"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              value={department}
              onChange={(e)=>setDepartment(e.target.value)}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ width: 400, marginTop: 5 }}
              onClick={addEmployee}
            >
              Submit
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Add;
