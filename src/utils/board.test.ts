import { expect, test } from "vitest";
import { BoardUtils } from "./board";

test("isBoardSolved returns true when all the board tiles are in ascending order", () => {
  const board = BoardUtils.generateBoard(false);

  expect(BoardUtils.isPuzzleSolved(board)).toBeTruthy();
});

test("isBoardSolved returns false when all the board tiles not in the correct order", () => {
  const board = BoardUtils.generateBoard();

  expect(BoardUtils.isPuzzleSolved(board)).toBeFalsy();
});
