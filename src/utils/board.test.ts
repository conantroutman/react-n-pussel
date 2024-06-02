import { expect, test } from "vitest";
import { BoardUtils } from "./board";
import { BOARD_COLS, BOARD_ROWS } from "../config";

test("isBoardSolved returns true when all the board tiles are in ascending order", () => {
  const board = BoardUtils.generateBoard(false);

  expect(BoardUtils.isPuzzleSolved(board)).toBeTruthy();
});

test("isBoardSolved returns false when the empty tile is not last", () => {
  const board = BoardUtils.generateBoard(false);

  // First tile is going to be 0/empty
  // Move it to the end of the board
  const emptyTile = board[0].shift();
  if (emptyTile) {
    board[board.length - 1].push(emptyTile);
  }

  expect(BoardUtils.isPuzzleSolved(board)).toBeFalsy();
});

test("isBoardSolved returns false when all the board tiles not in the correct order", () => {
  const board = BoardUtils.generateBoard();

  expect(BoardUtils.isPuzzleSolved(board)).toBeFalsy();
});

test("generateBoard generates the correct number of tiles", () => {
  const board = BoardUtils.generateBoard();

  // Maybe not the best unit test because it assumes all rows will have equal number of columns
  expect(board.length).toEqual(BOARD_ROWS);
  expect(board[0].length).toEqual(BOARD_COLS);
});
