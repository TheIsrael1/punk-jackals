import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import MeetTeam from './pages/meet';
import RoadMap from './pages/roadmap';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/roadmap" element={<RoadMap />} />
      <Route path="/meet-the-team" element={<MeetTeam />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
