import { expect, test } from "vitest";
import { generateBoard, isPuzzleSolved } from "./board";

test("isBoardSolved returns true when all the board tiles are in ascending order", () => {
  const board = generateBoard(false);

  expect(isPuzzleSolved(board)).toBeTruthy();
});

test("isBoardSolved returns false when all the board tiles not in the correct order", () => {
  const board = generateBoard();

  expect(isPuzzleSolved(board)).toBeFalsy();
});
