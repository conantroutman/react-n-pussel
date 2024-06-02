import { useAtom } from "jotai";
import { boardAtom, movesAtom, isSolvedAtom } from "../store/atoms";
import { BoardUtils } from "../utils/board";
import { useEffect } from "react";

export function useBoard() {
  const [board, setBoard] = useAtom(boardAtom);
  const [isSolved, setIsSolved] = useAtom(isSolvedAtom);
  const [moves, setMoves] = useAtom(movesAtom);

  const randomizeBoard = () => {
    setBoard(BoardUtils.shuffleBoard([...board]));
  };

  const moveTile = (row: number, col: number) => {
    const emptyTile = BoardUtils.findEmptyTileIndex(board);
    if (!emptyTile) {
      return;
    }

    BoardUtils.shiftTiles(board, { row, col }, emptyTile);
    setBoard([...board]);
    setMoves((prev) => prev + 1);
  };

  const resetBoard = () => {
    setBoard(BoardUtils.generateBoard());
    setIsSolved(false);
    setMoves(0);
  };

  useEffect(() => {
    if (!isSolved && BoardUtils.isPuzzleSolved(board)) {
      setIsSolved(true);
    }
  }, [board, isSolved, setIsSolved]);

  return { board, randomizeBoard, moveTile, resetBoard, isSolved, moves };
}
