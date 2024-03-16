import { Link } from "react-router-dom";
import { ICONS } from "../data/constants";

const NavBar = () => {
  return (
    <nav className="flex sticky top-0 items-center justify-between px-4 bg-background shadow-sm">
      <div className="flex">
        <Link
          to=""
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img className="w-6 h-6" src={ICONS.logoIc} alt="" />
          <span className="ml-3 text-2xl text-secondaryDark font-black">
            Events
          </span>
        </Link>
        <div className="flex items-center gap-5 w-[300px]  rounded-lg py-2 px-3 mx-5">
          <button className="flex-shrink-0 text-gray-500">
            <img className="w-6 h-6" src={ICONS.searchIc} alt="Search Icon" />
          </button>
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Search for premisses here..."
          />
        </div>
      </div>
      <div>
        <Link to="favorites" className="font-semibold text-secondaryDark">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
