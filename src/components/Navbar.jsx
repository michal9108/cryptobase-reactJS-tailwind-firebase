import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrepinacTemy from "./PrepinacTemy";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import Pricing from "./Pricing";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="rounded-div flex  items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Krypto Portál</h1>
      </Link>
      <div className="hidden md:block">
        <PrepinacTemy />
      </div>

      {user?.email ? (
        <div>
          <Link to="/ucet" className="p-4">
            Účet
          </Link>
          <button onClick={handleSignOut}>Odhlásenie</button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to="/pricing" className="p-4 hover:text-accent">
            Pricing
          </Link>
          <Link to="/prihlasenie" className="p-4 hover:text-accent">
            Prihlásenie
          </Link>
          <Link
            to="/registracia"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Registrácia
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/">Domov</Link>
          </li>
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/ucet">Účet</Link>
          </li>
          <li className=" py-6">
            <PrepinacTemy />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/prihlasenie">
            <button
              onClick={handleNav}
              className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"
            >
              Prihlásenie
            </button>
          </Link>
          <Link onClick={handleNav} to="/registracia">
            <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Registrácia
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
