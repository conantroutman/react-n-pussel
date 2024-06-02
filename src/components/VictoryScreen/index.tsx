import { useBoard } from "../../hooks/useBoard";
import { NewGameButton } from "./components/NewGameButton";

export const VictoryScreen = () => {
  const { moves } = useBoard();

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="text-center font-bold text-7xl max-md:text-4xl uppercase">
        🎊 Du vann! 🎊
      </div>
      <div className="text-center">
        Du klarade spelet med <span className="font-semibold">{moves}</span>{" "}
        drag.
      </div>
      <NewGameButton />
    </div>
  );
};
