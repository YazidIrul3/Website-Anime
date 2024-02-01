import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useHref } from "react-router-dom";

const Card = ({ items, id }) => {
  return (
    <Link
      to="/"
      className="flex flex-col mt-9 flex-wrap justify-center items-center "
      id={id}
    >
      <div className="flex flex-col justify-center items-center p-2">
        <img
          src={items.images.webp.image_url}
          className=" w-full max-h-64 object-cover rounded-xl  "
        ></img>
        <h1 className=" md:text-lg text-sm font-bold">{items.title}</h1>
      </div>
    </Link>
  );
};

Card.propTypes = {
  items: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
