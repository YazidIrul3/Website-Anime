import { useParams } from "react-router-dom";

const DetailAnime = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>detail anime {id} </h1>
    </div>
  );
};

export default DetailAnime;
