import React from "react";

interface Props {
  value: number;
  row: number;
  col: number;
  onClick: (coords: { row: number; col: number }) => void;
}

export const PuzzleTile: React.FC<Props> = ({ value, row, col, onClick }) => {
  const handleClick = () => {
    onClick({ row, col });
  };

  return (
    <button
      tabIndex={1}
      onClick={handleClick}
      className="w-full aspect-square bg-blue-300 rounded-md text-1/2 hover:bg-blue-400 hover:scale-105 transition text-3xl max-md:text-xl max-sm:text-lg"
    >
      {value}
    </button>
  );
};
