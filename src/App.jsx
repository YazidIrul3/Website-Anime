import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import AnimePopuler from "./pages/popuiler/AnimePopuler";
import Search from "./pages/Search/search";
import DetailAnime from "./pages/detail/DetailAnime";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/populer" element={<AnimePopuler />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/detailAnime/:id" element={<DetailAnime />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
