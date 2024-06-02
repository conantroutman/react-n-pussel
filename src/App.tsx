import { PuzzleBoard } from "./components/Board";
import { RandomizeButton } from "./components/Board/components/RandomizeButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VictoryScreen } from "./components/VictoryScreen";
import { useBoard } from "./hooks/useBoard";

function App() {
  const { isSolved } = useBoard();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex justify-center items-center flex-col gap-4 p-4 max-md:p-2">
        <div className="h-full flex flex-col gap-4 max-lg:w-full lg:w-[800px] w-[1024px] justify-center">
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
      <Footer />
    </div>
  );
}

export default App;
