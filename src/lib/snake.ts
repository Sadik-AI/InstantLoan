export type Direction = 'up' | 'down' | 'left' | 'right';
export type GameStatus = 'playing' | 'paused' | 'over' | 'won';

export type Point = {
  x: number;
  y: number;
};

export type GridSize = {
  columns: number;
  rows: number;
};

export type GameState = {
  snake: Point[];
  direction: Direction;
  requestedDirection: Direction;
  food: Point;
  score: number;
  status: GameStatus;
  grid: GridSize;
};

const DIRECTION_VECTORS: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

export function createInitialState(grid: GridSize, foodIndex = 0): GameState {
  const midRow = Math.floor(grid.rows / 2);
  const snake = [
    { x: 2, y: midRow },
    { x: 1, y: midRow },
    { x: 0, y: midRow },
  ];

  return {
    snake,
    direction: 'right',
    requestedDirection: 'right',
    food: getNextFoodPosition(snake, grid, foodIndex) ?? { x: grid.columns - 1, y: grid.rows - 1 },
    score: 0,
    status: 'playing',
    grid,
  };
}

export function isOppositeDirection(a: Direction, b: Direction) {
  return (
    (a === 'up' && b === 'down') ||
    (a === 'down' && b === 'up') ||
    (a === 'left' && b === 'right') ||
    (a === 'right' && b === 'left')
  );
}

export function queueDirection(state: GameState, nextDirection: Direction): GameState {
  const canReverse = state.snake.length <= 1;
  const targetDirection =
    !canReverse && isOppositeDirection(state.direction, nextDirection)
      ? state.requestedDirection
      : nextDirection;

  return {
    ...state,
    requestedDirection: targetDirection,
  };
}

export function getNextFoodPosition(
  snake: Point[],
  grid: GridSize,
  startIndex = 0,
): Point | null {
  const occupied = new Set(snake.map((segment) => `${segment.x},${segment.y}`));
  const openCells: Point[] = [];

  for (let y = 0; y < grid.rows; y += 1) {
    for (let x = 0; x < grid.columns; x += 1) {
      const key = `${x},${y}`;
      if (!occupied.has(key)) {
        openCells.push({ x, y });
      }
    }
  }

  if (openCells.length === 0) {
    return null;
  }

  return openCells[startIndex % openCells.length];
}

export function advanceGame(state: GameState, foodIndex = 0): GameState {
  if (state.status !== 'playing') {
    return state;
  }

  const nextDirection =
    state.snake.length > 1 && isOppositeDirection(state.direction, state.requestedDirection)
      ? state.direction
      : state.requestedDirection;

  const movement = DIRECTION_VECTORS[nextDirection];
  const nextHead = {
    x: state.snake[0].x + movement.x,
    y: state.snake[0].y + movement.y,
  };
  const willEat = nextHead.x === state.food.x && nextHead.y === state.food.y;
  const collisionBody = willEat ? state.snake : state.snake.slice(0, -1);
  const hitsWall =
    nextHead.x < 0 ||
    nextHead.y < 0 ||
    nextHead.x >= state.grid.columns ||
    nextHead.y >= state.grid.rows;
  const hitsSelf = collisionBody.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

  if (hitsWall || hitsSelf) {
    return {
      ...state,
      direction: nextDirection,
      requestedDirection: nextDirection,
      status: 'over',
    };
  }

  const snake = willEat
    ? [nextHead, ...state.snake]
    : [nextHead, ...state.snake.slice(0, -1)];

  if (willEat) {
    const food = getNextFoodPosition(snake, state.grid, foodIndex);
    if (!food) {
      return {
        ...state,
        snake,
        direction: nextDirection,
        requestedDirection: nextDirection,
        score: state.score + 1,
        status: 'won',
      };
    }

    return {
      ...state,
      snake,
      direction: nextDirection,
      requestedDirection: nextDirection,
      food,
      score: state.score + 1,
    };
  }

  return {
    ...state,
    snake,
    direction: nextDirection,
    requestedDirection: nextDirection,
  };
}
