import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`
    relative
    left-0
    top-20
    [width:100px]
    [height:500px]
    flex
    flex-col
    justify-between
    mt-2
`}
`;

const HitBox = styled.div`
  ${tw`
h-5
w-5
rounded-3xl
bg-orange-300
ml-6
`}
`;

const Reveal = styled.div`
  ${tw` 
    relative
    [top:0px]
    [left:25px]
    z-50
    [width: 500px]
    [height: 49px]
    bg-orange-100
    bg-opacity-50
    border-2
    border-orange-500
    invisible
    group-hover:visible
`}
`;

const RevealColumns = () => {
  let arr: number[];
  (arr = [0]).length = 9;
  arr.fill(0);
  console.log(arr);

  return (
    <Container>
      {arr.map((element, index) => (
        <div className="flex">
          <HitBox key={index} className="group">
            <Reveal key={index} />
          </HitBox>
        </div>
      ))}
    </Container>
  );
};

export default RevealColumns;
