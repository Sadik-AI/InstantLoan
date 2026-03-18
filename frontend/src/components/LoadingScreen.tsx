import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,0,0,0.35),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center text-center"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_18px_60px_-20px_rgba(230,0,0,0.65)] backdrop-blur-xl"
        >
          <span className="font-display text-4xl font-bold tracking-tight">WS</span>
        </motion.div>

        <p className="font-display text-3xl font-semibold">WS Computer</p>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          Preparing a premium service experience for repairs, sales, and accessories.
        </p>

        <div className="mt-8 flex gap-2">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={{ opacity: [0.25, 1, 0.25], y: [0, -6, 0] }}
              transition={{
                duration: 1,
                delay: item * 0.15,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              className="h-3 w-3 rounded-full bg-brand-400"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
