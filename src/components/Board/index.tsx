import React from "react";
import { BOARD_COLS, BOARD_ROWS } from "../../config";
import { PuzzleTile } from "./components/PuzzleTile";
import { EmptyPuzzleTile } from "./components/EmptyPuzzleTile";
import { BoardUtils } from "../../utils/board";
import { useBoard } from "../../hooks/useBoard";

export const PuzzleBoard = () => {
  const { board, moveTile } = useBoard();

  const handleClick: React.ComponentProps<typeof PuzzleTile>["onClick"] = ({
    row,
    col,
  }) => {
    moveTile(row, col);
  };

  return (
    <div
      style={
        { "--cols": BOARD_COLS, "--rows": BOARD_ROWS } as React.CSSProperties
      }
      className="w-full mx-auto grid gap-2 grid-cols-[repeat(var(--cols),minmax(0,1fr))] grid-rows-[repeat(var(--rows),minmax(0,1fr))] rounded-lg border border-solid border-neutral-300 p-2"
    >
      {BoardUtils.boardGridToTileList(board).map((tile) =>
        tile.value === 0 ? (
          <EmptyPuzzleTile key={tile.value} />
        ) : (
          <PuzzleTile
            key={tile.value}
            value={tile.value}
            row={tile.row}
            col={tile.col}
            onClick={handleClick}
          />
        )
      )}
    </div>
  );
};
