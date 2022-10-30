import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import "./home.css";
import { serverurl } from "../../URl/Server";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";

const Home = () => {
  const [employee, setEmployee] = useState([]);

  const displayEmplyee = async () => {
    axios.get(`${serverurl}api/user/getallemployee`).then((res) => {
       
      const { data } = res;
     
      setEmployee(data);
    });
  };

  useEffect(() => {
    displayEmplyee();
  }, []);

  return (
    <>
      <Container sx={{ marginTop: "5rem" }}>
        <Button variant="contained">Add</Button>
        <Box>
          <Typography sx={{ marginTop: "20px" }} variant="h5">
            Employee Details
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: "5px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Id Number</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employee.map((item) => {
                  return (
                    <TableRow
                      key={item._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{item.name} </TableCell>
                      <TableCell>{item._id} </TableCell>
                      <TableCell>{item.phone} </TableCell>
                      <TableCell>{item.email} </TableCell>
                      <TableCell>{item.department} </TableCell>
                      <Button> <EditIcon/> </Button>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default Home;
