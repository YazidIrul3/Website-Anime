import { useState, useEffect } from "react";
import Card from "../Fragments/Card";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useApiAnime } from "../../api/useApi";
import Navbar from "./Navbar";

const Home = ({ title }) => {
  const [animePopuler, setAnimePopuler] = useState([]);
  const apiAnimePopuler = useApiAnime("top/anime?limit=8");

  const getAnimePopuler = async () => {
    try {
      setAnimePopuler(apiAnimePopuler);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnimePopuler();
  }, []);

  // const search = (q) => {
  //   const querySearch = setAnimePopuler();
  //   return querySearch;
  // };

  return (
    <section className="flex flex-col">
      <div>
        <Navbar />
      </div>
      
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
    </section>
  );
};

Home.propTypes = {
  title: PropTypes.objectOf(PropTypes.any).isRequired,
  apiAnime: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
