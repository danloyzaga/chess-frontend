import React from "react";
import Square from "../components/Square";

const HomePage = () => {
  return (
    <React.Fragment>
      <Square
        isBlack={true}
        highlighted={false}
        chessPiece={{ piece: "n", colour: "b" }}
      ></Square>
    </React.Fragment>
  );
};

export default HomePage;
