import InputSearch from "../Fragments/InputSearch";
import PropTypes from "prop-types";

const Navbar = ({ onChange }) => {
  return (
    <nav className=" bg-amber-600 w-screen text-white fixed top-0 right-0 left-0 px-4 z-50">
      <div className=" flex justify-between items-center m-3 p-1">
        <div>
          <a to="/" className=" font-bold text-2xl">
            YKH AnimeList
          </a>
        </div>

        <div>
          <InputSearch onChange={onChange} />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onChange: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Navbar;
