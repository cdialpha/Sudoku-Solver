import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Gameboard from "./components/Gameboard";
import tw from "twin.macro";
import styled from "styled-components";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Gameboard />
    </div>
  );
};

export default App;
