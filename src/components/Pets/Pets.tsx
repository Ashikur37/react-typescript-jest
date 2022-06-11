import Cards from "../cards/cards";
import Filters from "../filters/Filters";
import "./Pets.css";

import axios from "axios";
import { useEffect, useState } from "react";
const Pets = () => {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const response = await axios.get("http://localhost:4000/cats");
    setCats(response.data);
  };
  useEffect(() => {
    fetchCats();
  }, []);
  return (
    <div className="container">
      <div className="app-container">
        <Filters />
        <Cards cats={cats} />
      </div>
    </div>
  );
};

export default Pets;
