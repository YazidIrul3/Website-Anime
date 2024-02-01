import Input from "../Elements/Input/Input";

const Navbar = () => {
  return (
    <nav className=" bg-black w-screen text-white fixed top-0 right-0 left-0 px-4 z-50">
      <div className=" flex justify-between items-center m-3 p-1">
        <div>
          <a to="/" className=" font-bold text-2xl">
            YKH AnimeList
          </a>
        </div>

        <div>
          <Input />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
