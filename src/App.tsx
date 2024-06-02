import { PuzzleBoard } from "./components/Board/PuzzleBoard";
import { RandomizeButton } from "./components/Board/components/RandomizeButton";
import { VictoryScreen } from "./components/VictoryScreen";
import { useBoard } from "./hooks/useBoard";

function App() {
  const { isSolved } = useBoard();

  return (
    <main className="absolute inset-0 flex items-center flex-col gap-4 p-4 max-md:p-2">
      <div className="h-full flex flex-col gap-4 w-full max-w-[600px] justify-center">
        {isSolved ? (
          <VictoryScreen />
        ) : (
          <div className="flex flex-col gap-4 h-full">
            <PuzzleBoard />
            <RandomizeButton />
          </div>
        )}
        {/* <RandomizeButton /> */}
      </div>
    </main>
  );
}

export default App;
