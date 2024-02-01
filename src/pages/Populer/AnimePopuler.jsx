import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Fragments/Card";

const AnimePopuler = () => {
  const [allAnimePopuler, setAllAnimePopuler] = useState([]);

  const getAllAnimePopulerList = async () => {
    try {
      const url = await "https://api.jikan.moe/v4/top/anime";
      const response = await axios.get(url);
      setAllAnimePopuler(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAnimePopulerList();
  }, []);

  return (
    <div className="flex flex-col p-4 mt-14 ">
      <div>
        <h1 className=" text-4xl text-black font-bold">POPULER ANIME</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 w-full min-h-screen">
        {allAnimePopuler.map((anime) => {
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

export default AnimePopuler;
