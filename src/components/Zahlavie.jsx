import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import PrepinacTemy from "./PrepinacTemy";

const Zahlavie = () => {
  return (
    <div className="rounded-div items-center justify-between  mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Podpora</h2>
            <ul>
              <li className="text-sm py-2">Help Centrum</li>
              <li className="text-sm py-2">Kontaktujte nás</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Dokumentácia</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">O nás</li>
              <li className="text-sm py-2">Kariéra</li>
              <li className="text-sm py-2">Investičné príležitosti</li>
              <li className="text-sm py-2">Legislatíva</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <PrepinacTemy />
              </div>
              <p className="text-center md:text-right">
                Prihláste sa na odber noviniek
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Sem zadajte svoj email"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
                    Registrujte sa{" "}
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center py-4">
      Powered by Coin Gecko | Made with ❤️ | www.miskokdesi.sk | Only for educational purposes
      </p>
      </div>

    </div>
  );
};

export default Zahlavie;
