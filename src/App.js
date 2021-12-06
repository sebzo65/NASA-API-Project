import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav1 from "./Components/Nav1";
import Home from "./Containers/Home";
import LandsatImages from "./Containers/LandsatImages";
import MarsWeather from "./Containers/MarsWeather";
import NaturalEventTracker from "./Containers/NaturalEventTracker";

function App() {
  return (
    <Router>
      <Nav1 />
      <Routes>
        <Route
          path="/NaturalEventTracker"
          component={<NaturalEventTracker />}
        ></Route>
        <Route path="/MarsWeather" component={<MarsWeather />}></Route>
        <Route path="/LandsatImages" component={<LandsatImages />}></Route>
        <Route path="/" component={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
