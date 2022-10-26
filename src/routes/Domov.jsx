import React from "react";
import KryptoSearch from "../components/KryptoSearch";
import Trending from "../components/Trending";

const Domov = ({ coins }) => {
  return (
    <div>
      <KryptoSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Domov;
