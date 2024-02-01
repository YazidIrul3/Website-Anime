import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/Home/HomePages";
import AboutUs from "./pages/AboutUs/AboutUs";
import AnimePopuler from "./pages/Populer/AnimePopuler";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/populer" element={<AnimePopuler />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
