import { useState, useEffect } from "react";
import Card from "../Fragments/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ title }) => {
  const [animePopuler, setAnimePopuler] = useState([]);

  const getAnimeList = async () => {
    try {
      const url = await "https://api.jikan.moe/v4/top/anime?limit=8";
      const response = await axios.get(url);
      setAnimePopuler(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnimeList();
  }, []);

  return (
    <div className="flex flex-col p-4 mt-14 ">
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl text-black font-bold">{title}</h1>
        <Link to="/populer" className=" no-underline hover:underline">
          Lihat semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 w-full min-h-screen">
        {animePopuler.map((anime) => {
          return (
            <div key={anime.mal_id} className=" shadow-xl">
              <Card items={anime} id={anime.mal_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
