import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import ErrorBoundary from './ErrorBoundary'

export default function Hero3D() {
  const backend = import.meta.env.VITE_BACKEND_URL
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <ErrorBoundary
        fallback={
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,_rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_50%_80%,_rgba(168,85,247,0.18),transparent_50%)]" />
          </div>
        }
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
          {/* You can replace this with your own Spline scene URL later. If it fails to load, a soft gradient fallback is shown. */}
          <Spline scene="https://prod.spline.design/6h3kQZkIcZ5i1tF1/scene.splinecode" />
        </div>
      </ErrorBoundary>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 py-28">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            Anabolic Panda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-blue-100/90"
          >
            Lifter. Nerd. Software Engineer. I build muscle and full‑stack apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold ring-1 ring-white/10">Get in Touch</a>
          </motion.div>

          {backend && (
            <p className="mt-4 text-xs text-blue-200/60">API connected: {backend}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-blue-500/20 blur-2xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-6"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Bench', value: '120kg' },
                { label: 'Squat', value: '180kg' },
                { label: 'Deadlift', value: '210kg' },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs uppercase tracking-wide text-blue-200/70">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  )
}
