import { atom } from "jotai";
import { BoardUtils } from "../utils/board";

export const boardAtom = atom(BoardUtils.generateBoard());

export const movesAtom = atom(0);

export const isSolvedAtom = atom(false);
