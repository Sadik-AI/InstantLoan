import assert from 'node:assert/strict';

import {
  advanceGame,
  createInitialState,
  getNextFoodPosition,
  queueDirection,
  type GameState,
} from './snake.ts';

function runTest(name: string, fn: () => void) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

runTest('moves the snake one cell in its current direction', () => {
  const initial = createInitialState({ columns: 8, rows: 8 });

  const next = advanceGame(initial);

  assert.deepEqual(next.snake, [
    { x: 3, y: 4 },
    { x: 2, y: 4 },
    { x: 1, y: 4 },
  ]);
  assert.equal(next.score, 0);
});

runTest('grows and increments score when food is eaten', () => {
  const state: GameState = {
    ...createInitialState({ columns: 8, rows: 8 }),
    snake: [
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 0, y: 2 },
    ],
    food: { x: 3, y: 2 },
  };

  const next = advanceGame(state, 0);

  assert.deepEqual(next.snake, [
    { x: 3, y: 2 },
    { x: 2, y: 2 },
    { x: 1, y: 2 },
    { x: 0, y: 2 },
  ]);
  assert.equal(next.score, 1);
  assert.deepEqual(next.food, { x: 0, y: 0 });
});

runTest('marks game over when hitting a wall', () => {
  const state: GameState = {
    ...createInitialState({ columns: 4, rows: 4 }),
    snake: [
      { x: 3, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ],
    food: { x: 0, y: 0 },
    direction: 'right',
    requestedDirection: 'right',
  };

  const next = advanceGame(state);

  assert.equal(next.status, 'over');
});

runTest('prevents reversing directly into the snake body', () => {
  const state = queueDirection(createInitialState({ columns: 8, rows: 8 }), 'left');

  assert.equal(state.requestedDirection, 'right');
});

runTest('places food in the first open cell using the provided index', () => {
  const food = getNextFoodPosition(
    [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    { columns: 3, rows: 2 },
    1,
  );

  assert.deepEqual(food, { x: 1, y: 1 });
});

console.log('Snake logic tests passed.');
