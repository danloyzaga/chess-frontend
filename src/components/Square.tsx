import { Button, styled } from "@mui/material";
import { colors } from "../styles/variables";
import { ChessPiece } from "../types";

interface SquareProps {
  isBlack: boolean;
  highlighted: boolean;
  chessPiece: ChessPiece;
}

const Square = ({ isBlack, highlighted, chessPiece }: SquareProps) => {
  function handleClick() {
    console.log("U CLICKED ME");
  }

  const ChessSquare = styled(Button)({
    width: "10vw",
    height: "10vh",
    background: highlighted
      ? colors.highlighted
      : isBlack
      ? colors.darkTile
      : colors.lightTile,
    "&:hover": {
      backgroundColor: colors.highlighted,
    },
  });

  return (
    <ChessSquare onClick={handleClick}>
      <img
        src={"images/pieces/" + chessPiece.colour + chessPiece.piece + ".png"}
        alt="placeholder"
        style={{ height: "100%", width: "70%" }}
      ></img>
    </ChessSquare>
  );
};

export default Square;
