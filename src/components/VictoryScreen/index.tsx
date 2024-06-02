import { useBoard } from "../../hooks/useBoard";
import { NewGameButton } from "./components/NewGameButton";

export const VictoryScreen = () => {
  const { clicks } = useBoard();

  return (
    <div className="w-full">
      <div className="text-center font-bold text-6xl uppercase">Du vann!</div>
      <div className="text-center">
        Du klarade spelet med <span className="font-semibold">{clicks}</span>{" "}
        drag.
      </div>
      <NewGameButton />
    </div>
  );
};
