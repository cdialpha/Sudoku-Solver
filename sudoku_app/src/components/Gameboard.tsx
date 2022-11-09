import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import axios from "axios";

// const body = {
//   puzzle:
//     "9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254",
// };
// const data = axios.get("127.0.0.1:5000");
// data.then((response) => {
//   console.log(response);
// });

const generateRandomBoard = () => {
  // generate a random string with avg 3-4 numbers
  const seed = Math.random();
  console.log(seed);
};

type IncrementProps = (event: React.MouseEvent<HTMLElement>) => void;

// const Unit = div
// const BoardGrid = () => {}
const Container = styled.div`
  ${tw`
[width: 600px]
[height: 600px] ml-auto mr-auto
`}
`;
const Board = styled.div`
  ${tw` 
  relative
  left-0
  grid
  [grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr]
  [grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr]
  [width: 500px]
  [height: 500px]
  border-2
  border-black
  ml-auto mr-auto
  mt-20
`}
`;

const Button = styled.button`
  ${tw`
bg-blue-200
mt-10
`}
`;

const Cell = styled.div`
  ${tw`
border-2
bg-white
text-center
text-2xl
font-extrabold
bg-blue-100
hover:bg-gray-200
`}
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const Gameboard = () => {
  const empty9x9: string =
    ".................................................................................";
  const [data, setData] = useState(empty9x9);
  let dataArray = data.split("");

  const increment: IncrementProps = (e) => {
    const index = e.target.getAttribute("data-index");
    // state is a long string. convert to array of characters | strings
    const array = data.split("");
    let elementToIncrement = array[index];
    let num = Number(elementToIncrement);
    if (elementToIncrement == "." || num == 9) {
      array[index] = "1";
    } else if (num > 0 && num < 9) {
      num += 1;
      let string = num.toString();
      array[index] = string;
    }
    let newArray = array.reduce((acc, cur) => acc.toString() + cur.toString());
    setData(newArray);
  };

  return (
    <div className="flex-col">
      <h1 className="mt-10"> Sudoku </h1>
      <Board>
        {dataArray.map((element, index) => (
          <Cell onClick={increment} key={index} data-index={index}>
            {element}
          </Cell>
        ))}
      </Board>
      <Button onClick={generateRandomBoard}> Generate New Board </Button>
    </div>
  );
};

export default Gameboard;
