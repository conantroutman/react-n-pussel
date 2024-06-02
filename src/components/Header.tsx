import { BOARD_COLS, BOARD_ROWS } from "../config";

export const Header = () => {
  return (
    <header>
      <h1 className="text-center text-5xl font-bold p-6 max-md:text-3xl bg-neutral-100">
        React {BOARD_COLS * BOARD_ROWS}-Pussel
      </h1>
    </header>
  );
};
