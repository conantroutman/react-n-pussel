import { useBoard } from "../../../hooks/useBoard";
import { Button } from "../../Button";

export const RandomizeButton = () => {
  const { randomizeBoard } = useBoard();

  const handleClick = () => {
    randomizeBoard();
  };

  return <Button onClick={handleClick}>Slumpa</Button>;
};
