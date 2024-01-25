import { Button, styled } from "@mui/material";
import { colours } from "../styles/variables";
import { ChessPiece } from "../types";

interface SquareProps {
  isDarkTile: boolean;
  position: string;
  chessPiece: ChessPiece;
}

const Square = ({ isDarkTile, chessPiece }: SquareProps) => {
  function handleClick() {
    console.log("U CLICKED ME");
  }

  const ChessSquare = styled(Button)({
    width: "10vw",
    height: "10vh",
    backgroundColor: isDarkTile ? colours.darkTile : colours.lightTile,
    "&:hover": {
      backgroundColor: colours.highlighted,
    },
  });

  return (
    <ChessSquare onClick={handleClick}>
      <img
        src={`images/pieces/${chessPiece.colour}${chessPiece.piece}.png`}
        alt=""
        style={{ height: "100%", width: "70%" }}
      ></img>
    </ChessSquare>
  );
};

export default Square;
