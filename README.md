# React N-Pussel

## Prerequisites

[Node.js](https://nodejs.org/en) >= 18.0.0 is required to run this project, although it is recommended you get the latest LTS version.

[pnpm](https://pnpm.io) is the package manager used in this project.
To install, run:

```bash
  corepack enable
```

## Getting Started

To install dependencies, run:

```bash
  pnpm i
```

To start the dev server, run:

```bash
  pnpm dev
```

### Configuration

The following environment variables can be used to configure the size of the board.

```
VITE_BOARD_COLS
VITE_BOARD_ROWS
```

Simply make a copy of the provided `.env.example` file and rename it to `.env` to get started. The dev server will automatically detect changes to this file.
