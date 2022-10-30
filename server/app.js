import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Routes from './routes/route.js'
dotenv.config();

const app = express();

mongoose.connect("mongodb://localhost:27017/percily").then((data, error) => {
  if (error) {
    console.log(`database not connected ${error}`);
  } else {
    console.log("database connected");
  }
});

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("server is running");
});

app.use('/api/user',Routes)


// error handling

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 400;
  next(400);
});

app.use((error, req, res) => {
  res.status(error.status || 500).json({ error: { message: error.message } });
});



const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
