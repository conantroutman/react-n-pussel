import { BOARD_COLS, BOARD_ROWS } from "../config";
import { compareArrays } from "./compareArrays";

export type BoardGrid = number[][];

type TileIndex = { col: number; row: number };

const VICTORY_CONDITION = Array.from(
  { length: BOARD_COLS * BOARD_ROWS - 1 },
  (_, i) => i + 1
);

/**
 *
 * @param randomize Randomize board tiles. Default is true.
 * @returns
 */
function generateBoard(randomize: boolean = true) {
  const board: BoardGrid = [];

  let tile = 1;

  for (let i = 0; i < BOARD_ROWS; i++) {
    // Initialize row
    board.push([]);
    for (let j = 0; j < BOARD_COLS; j++) {
      board[i].push(tile);
      tile++;
    }
  }

  // Last tile is empty
  board[BOARD_ROWS - 1][BOARD_COLS - 1] = 0;

  if (!randomize) {
    return board;
  }

  return shuffleBoard(board);
}

/**
 * Flattens the board to a one-dimensional array containing value and position that can be used when rendering the tiles
 * @param board
 * @returns
 */
function boardGridToTileList(board: BoardGrid) {
  const flattenedBoard: { value: number; row: number; col: number }[] = [];

  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      flattenedBoard.push({ value: row[j], row: i, col: j });
    }
  }

  return flattenedBoard;
}

/**
 * Shuffle board tiles using Fisher-Yates algorithm
 * @param board
 * @returns
 */
function shuffleBoard(board: BoardGrid) {
  for (let i = board.length - 1; i > 0; i--) {
    for (let j = board[i].length - 1; j > 0; j--) {
      const row = Math.floor(Math.random() * (i + 1));
      const col = Math.floor(Math.random() * (j + 1));

      const temp = board[i][j];
      board[i][j] = board[row][col];
      board[row][col] = temp;
    }
  }

  return board;
}

/**
 * Checks if the board tiles are in the correct order
 * @param board
 * @returns
 */
function isPuzzleSolved(board: BoardGrid) {
  const boardSequence: number[] = [];

  const lastRow = board[board.length - 1];
  const lastCol = lastRow[lastRow.length - 1];

  if ([board[board.length - 1].length - 1] !== 0) {
  }

  // Flatten board to one-dimensional array, excluding the empty tile
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      // 0 = Empty
      // We don't want to include the empty tile
      if (row[j] !== 0) {
        boardSequence.push(row[j]);
      }
    }
  }

  return compareArrays(boardSequence, VICTORY_CONDITION);
}

/**
 * Linear search
 * This is probably not the most efficient way to do it, but it's not like anyone is going to play this game with thousands of tiles
 * @param board
 */
function findEmptyTileIndex(board: BoardGrid): TileIndex | undefined {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return { row: i, col: j };
      }
    }
  }
}

/**
 * Find
 *
 */

function shiftTiles(
  board: BoardGrid,
  startIndex: TileIndex,
  endIndex: TileIndex
) {
  // Return early if the tiles are not in the same row or column
  if (startIndex.row !== endIndex.row && startIndex.col !== endIndex.col) {
    return;
  }

  if (startIndex.row === endIndex.row) {
    // Shift left
    if (startIndex.col > endIndex.col) {
      for (let i = endIndex.col + 1; i <= startIndex.col; i++) {
        const temp = board[startIndex.row][i];

        board[startIndex.row][i] = board[startIndex.row][i - 1];
        board[startIndex.row][i - 1] = temp;
      }

      // Shift right
    } else {
      for (let i = endIndex.col - 1; i >= startIndex.col; i--) {
        const temp = board[startIndex.row][i];

        board[startIndex.row][i] = board[startIndex.row][i + 1];
        board[startIndex.row][i + 1] = temp;
      }
    }
  } else if (startIndex.col === endIndex.col) {
    // Shift up
    if (startIndex.row > endIndex.row) {
      for (let i = endIndex.row + 1; i <= startIndex.row; i++) {
        const temp = board[i][startIndex.col];

        board[i][startIndex.col] = board[i - 1][startIndex.col];
        board[i - 1][startIndex.col] = temp;
      }

      // Shift down
    } else {
      for (let i = endIndex.row - 1; i >= startIndex.row; i--) {
        const temp = board[i][startIndex.col];

        board[i][startIndex.col] = board[i + 1][startIndex.col];
        board[i + 1][startIndex.col] = temp;
      }
    }
  }

  // board[startIndex.row][startIndex.col] = 0;
}

export const BoardUtils = {
  generateBoard,
  boardGridToTileList,
  isPuzzleSolved,
  findEmptyTileIndex,
  shiftTiles,
  shuffleBoard,
};
