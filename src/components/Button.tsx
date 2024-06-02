import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="bg-black text-white w-full py-4 text-xl hover:bg-neutral-900 active:scale-105 transition rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
