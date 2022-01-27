import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav1 from "./Components/Nav1";
import Home from "./Containers/Home";
import LandsatImages from "./Containers/LandsatImages";
import MarsRover from "./Containers/MarsRover";
import NaturalEventTracker from "./Containers/NaturalEventTracker";

function App() {
  return (
    <Router>
      <Nav1 />
      <Routes>
        <Route
          path="/NaturalEventTracker"
          element={<NaturalEventTracker />}
        ></Route>
        <Route path="/MarsRover" element={<MarsRover />}></Route>
        <Route path="/LandsatImages" element={<LandsatImages />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
