import React from "react";
import Square from "../components/Square";

const HomePage = () => {
  return (
    <React.Fragment>
      <Square
        isDarkTile={true}
        position="A1"
        chessPiece={{ piece: "n", colour: "b" }}
      ></Square>
    </React.Fragment>
  );
};

export default HomePage;
