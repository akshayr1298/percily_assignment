import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Components/Add/Add";
import Edit from "./Components/Edit/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
