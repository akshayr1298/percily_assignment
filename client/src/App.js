import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
