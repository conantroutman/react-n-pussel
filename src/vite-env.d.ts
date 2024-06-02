/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: {
    VITE_BOARD_COLS: number;
    VITE_BOARD_ROWS: number;
  };
}
