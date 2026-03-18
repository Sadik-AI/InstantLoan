import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Pause, Play, RotateCcw } from 'lucide-react';

import { advanceGame, createInitialState, queueDirection, type Direction } from '../lib/snake';

const GRID = { columns: 12, rows: 12 };
const TICK_MS = 150;

const directionButtons: { label: string; direction: Direction }[] = [
  { label: 'Up', direction: 'up' },
  { label: 'Left', direction: 'left' },
  { label: 'Down', direction: 'down' },
  { label: 'Right', direction: 'right' },
];

const keyDirections: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  w: 'up',
  W: 'up',
  a: 'left',
  A: 'left',
  s: 'down',
  S: 'down',
  d: 'right',
  D: 'right',
};

export default function SnakeGame() {
  const [game, setGame] = useState(() => createInitialState(GRID, 12));

  const occupiedCells = useMemo(() => {
    const cells = new Set<string>();
    game.snake.forEach((segment) => {
      cells.add(`${segment.x},${segment.y}`);
    });
    return cells;
  }, [game.snake]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = keyDirections[event.key];

      if (!direction) {
        if (event.key === ' ') {
          event.preventDefault();
          setGame((current) => ({
            ...current,
            status: current.status === 'playing' ? 'paused' : current.status === 'paused' ? 'playing' : current.status,
          }));
        }
        if (event.key === 'Enter' && game.status === 'over') {
          setGame(createInitialState(GRID, 12));
        }
        return;
      }

      event.preventDefault();
      setGame((current) => queueDirection(current, direction));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [game.status]);

  useEffect(() => {
    if (game.status !== 'playing') {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setGame((current) => {
        const foodIndex = Math.floor(Math.random() * (current.grid.columns * current.grid.rows));
        return advanceGame(current, foodIndex);
      });
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [game.status]);

  const restartGame = () => {
    setGame(createInitialState(GRID, 12));
  };

  const togglePause = () => {
    setGame((current) => ({
      ...current,
      status:
        current.status === 'playing'
          ? 'paused'
          : current.status === 'paused'
            ? 'playing'
            : current.status,
    }));
  };

  const handleDirectionPress = (direction: Direction) => {
    setGame((current) => queueDirection(current, direction));
  };

  const statusLabel =
    game.status === 'over'
      ? 'Game over'
      : game.status === 'won'
        ? 'You filled the board'
        : game.status === 'paused'
          ? 'Paused'
          : 'Playing';

  return (
    <section id="snake-game" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 overflow-hidden"
        >
          <div className="border-b border-slate-200 px-6 py-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 mb-3">Quick break</p>
                <h2 className="text-3xl font-bold text-brand-950 mb-3">Classic Snake</h2>
                <p className="text-slate-600">
                  Use arrow keys or WASD to guide the snake, eat food to grow, and avoid the walls or your own tail.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={togglePause}
                  disabled={game.status === 'over' || game.status === 'won'}
                  className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60 inline-flex items-center gap-2"
                >
                  {game.status === 'paused' ? <Play size={18} /> : <Pause size={18} />}
                  {game.status === 'paused' ? 'Resume' : 'Pause'}
                </button>
                <button
                  type="button"
                  onClick={restartGame}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <RotateCcw size={18} />
                  Restart
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:px-10">
            <div className="flex justify-center">
              <div
                className="grid rounded-[1.5rem] border border-slate-200 bg-slate-950/95 p-3 shadow-inner shadow-black/20 w-full max-w-[32rem] aspect-square"
                style={{
                  gridTemplateColumns: `repeat(${GRID.columns}, minmax(0, 1fr))`,
                  gridTemplateRows: `repeat(${GRID.rows}, minmax(0, 1fr))`,
                }}
                aria-label="Snake game board"
              >
                {Array.from({ length: GRID.columns * GRID.rows }, (_, index) => {
                  const x = index % GRID.columns;
                  const y = Math.floor(index / GRID.columns);
                  const key = `${x},${y}`;
                  const isSnake = occupiedCells.has(key);
                  const isHead = game.snake[0].x === x && game.snake[0].y === y;
                  const isFood = game.food.x === x && game.food.y === y;

                  let className = 'm-[2px] rounded-[0.45rem] border border-white/5 bg-slate-900';

                  if (isSnake) {
                    className = isHead
                      ? 'm-[2px] rounded-[0.45rem] bg-brand-300'
                      : 'm-[2px] rounded-[0.45rem] bg-brand-500';
                  }

                  if (isFood) {
                    className =
                      'm-[2px] rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(255,255,255,0.08)]';
                  }

                  return <div key={key} className={className} />;
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>Status</span>
                  <span className="font-semibold text-slate-700">{statusLabel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Score</span>
                  <span className="text-3xl font-bold text-brand-950">{game.score}</span>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-700 mb-4">Controls</p>
                <div className="grid grid-cols-2 gap-3">
                  {directionButtons.map((button) => (
                    <button
                      key={button.direction}
                      type="button"
                      onClick={() => handleDirectionPress(button.direction)}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">Keyboard: arrow keys or WASD. Space pauses, Enter restarts after game over.</p>
              </div>

              {(game.status === 'over' || game.status === 'won') && (
                <div className="rounded-[1.5rem] border border-brand-200 bg-brand-50 p-5 text-sm text-brand-900">
                  {game.status === 'won'
                    ? 'Every cell is filled. Restart to play again.'
                    : 'You hit a boundary or yourself. Restart to try another run.'}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
