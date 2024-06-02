import { Button } from "../../Button";
import { useBoard } from "../../../hooks/useBoard";

export const NewGameButton = () => {
  const { resetBoard } = useBoard();

  const handleClick = () => {
    resetBoard();
  };

  return <Button onClick={handleClick}>Nytt Spel</Button>;
};
