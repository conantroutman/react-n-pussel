import { useAtom } from "jotai";
import { boardAtom, clicksAtom, isSolvedAtom } from "../store/atoms";
import {
  BoardUtils,
  findEmptyTileIndex,
  generateBoard,
  shiftTiles,
  shuffleBoard,
} from "../utils/board";
import { useEffect } from "react";

export function useBoard() {
  const [board, setBoard] = useAtom(boardAtom);
  const [isSolved, setIsSolved] = useAtom(isSolvedAtom);
  const [clicks, setClicks] = useAtom(clicksAtom);

  const randomizeBoard = () => {
    setBoard(shuffleBoard([...board]));
  };

  // TODO: Refactor
  const moveTile = (row: number, col: number) => {
    const emptyTile = findEmptyTileIndex(board);
    if (!emptyTile) {
      return;
    }

    shiftTiles(board, { row, col }, emptyTile);
    setBoard([...board]);
    setClicks((prev) => prev + 1);
  };

  const resetBoard = () => {
    setBoard(generateBoard());
    setIsSolved(false);
    setClicks(0);
  };

  useEffect(() => {
    if (!isSolved && BoardUtils.isPuzzleSolved(board)) {
      setIsSolved(true);
    }
  }, [board, isSolved, setIsSolved]);

  return { board, randomizeBoard, moveTile, resetBoard, isSolved, clicks };
}
