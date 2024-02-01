import Home from "../../components/Layouts/Home";
import Navbar from "../../components/Layouts/Navbar";

const HomePages = () => {
  return (
    <section className="flex flex-col">
      <div>
        <Navbar />
      </div>

      <div>
        <Home title="Paling Populer" />
      </div>
    </section>
  );
};

export default HomePages;
