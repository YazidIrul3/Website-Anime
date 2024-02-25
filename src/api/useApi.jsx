import axios from "axios";

export const useApiAnime = async (resourceEndPoint) => {
  const url = await (`https://api.jikan.moe/v4/${resourceEndPoint}`);
  const response = await axios.get(url);
  return response;
};