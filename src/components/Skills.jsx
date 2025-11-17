import { Dumbbell, Cpu, TerminalSquare, BrainCircuit, Gamepad2 } from 'lucide-react'

export default function Skills(){
  const items = [
    { icon: <Dumbbell/>, title: 'Strength & Discipline', desc: 'Progressive overload, recovery, nutrition — translating training principles into code quality.' },
    { icon: <Cpu/>, title: 'Full‑Stack Dev', desc: 'React, Tailwind, FastAPI, Mongo — clean architectures and DX‑focused builds.' },
    { icon: <TerminalSquare/>, title: 'DevOps Mindset', desc: 'CI/CD, testing, monitoring, and iterative improvement as a lifestyle.' },
    { icon: <BrainCircuit/>, title: 'AI + Automation', desc: 'Building tools that lift mental reps — embeddings, LLM orchestration, agents.' },
    { icon: <Gamepad2/>, title: 'Nerd Energy', desc: 'Anime, gaming, mechanical keyboards, and over‑engineered side quests.' },
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">What I Lift</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/30 text-cyan-300 grid place-items-center mb-4">
                {it.icon}
              </div>
              <div className="text-white font-semibold mb-1">{it.title}</div>
              <div className="text-blue-200/80 text-sm">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
