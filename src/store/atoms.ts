import { atom } from "jotai";
import { generateBoard } from "../utils/board";

export const boardAtom = atom(generateBoard());

export const clicksAtom = atom(0);

export const isSolvedAtom = atom(true);
