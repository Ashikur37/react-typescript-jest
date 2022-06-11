import { useState } from "react";
import validator from "validator";

import "./App.css";
import Cards from "./components/cards/cards";
import Pets from "./components/Pets/Pets";
import cats from "./mocks/cats.json";

function App() {
  return (
    <div>
      <Pets />
    </div>
  );
}

export default App;
