import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between pb-2 border-b-2 border-gray-200">
        <img className="w-35" src={Logo} alt="logo" />
        <div className="md:flex flex-wrap hidden ">
          <ul className="flex">
            <li className="m-3 font-semibold uppercase  hover:border-b-2 text-gray-700">
              <Link to="/home">Home</Link>
            </li>
            <li className="m-3 font-semibold uppercase  hover:border-b-2 text-gray-700">
              <Link to="/about">About</Link>
            </li>
            <li className="m-3 font-semibold uppercase  hover:border-b-2 text-gray-700">
              <Link to="/collection">Collection</Link>
            </li>
            <li className="m-3 font-semibold uppercase  hover:border-b-2 text-gray-700">
              <Link to="/contact">Contact</Link>
            </li>
            <button className="m-3 capitalize rounded-full border-gray-300 border-1 px-2 text-gray-700 text-sm font-semibold">
              admin panel
            </button>
          </ul>
        </div>

        <div className="flex">
          <i className="fa-solid fa-magnifying-glass m-3 text-3xl text-gray-700"></i>
          <i className="fa-solid fa-circle-user m-3 text-3xl text-gray-700"></i>
          <i
            className="fa-solid fa-bars m-3 text-3xl text-gray-700 hidden"
            onClick={() => setMenu(true)}
          ></i>
        </div>
      </nav>
      <div
        className={`absolute bg-white size-10 top-0 right-0 flex items-start justify-between px-4 w-full h-screen ${!menu && "hidden"}`}
      >
        <ul className="w-full pt-[70px]">
          <li className="p-3 m-2 font-semibold uppercase border-1 text-gray-700 cursor-pointer hover:font-extrabold hover:p-4 hover:border-gray-300 hover:border-2 hover:text-gray-600">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-3 m-2 font-semibold uppercase border-1 text-gray-700 cursor-pointer hover:font-extrabold hover:p-4 hover:border-gray-300 hover:border-2 hover:text-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 m-2 font-semibold uppercase border-1 text-gray-700 cursor-pointer hover:font-extrabold hover:p-4 hover:border-gray-300 hover:border-2 hover:text-gray-600">
            <Link to="/collection">Collection</Link>
          </li>
          <li className="p-3 m-2 font-semibold uppercase border-1 text-gray-700 cursor-pointer hover:font-extrabold hover:p-4 hover:border-gray-300 hover:border-2 hover:text-gray-600">
            <Link to="/contact">Contact</Link>
          </li>
          <button className="p-3 m-3 capitalize rounded-full border-gray-300 border-1 px-2 text-gray-700 text-sm font-semibold hover:font-extrabold hover:px-4 hover:border-gray-700 hover:border-2 hover:text-gray-600">
            admin panel
          </button>
        </ul>
        <i
          className="fa-solid fa-bars p-7 text-3xl text-gray-700"
          onClick={() => setMenu(false)}
        ></i>
      </div>
    </div>
  );
}
