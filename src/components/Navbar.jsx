import { Menu, Dumbbell, Code, Gamepad2 } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-start lg:items-center text-sm">
      <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
      <li><a href="#skills" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><Dumbbell size={16}/>Gym</a></li>
      <li><a href="#projects" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><Code size={16}/>Projects</a></li>
      <li><a href="#fun" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"><Gamepad2 size={16}/>Nerd</a></li>
      <li><a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white transition-colors">Contact</a></li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/25 ring-1 ring-white/10">
            <span className="text-white font-black">AP</span>
          </div>
          <div>
            <div className="text-white font-semibold leading-tight group-hover:text-blue-200">Anabolic Panda</div>
            <div className="text-[11px] text-blue-300/70 -mt-0.5">Gym • Nerd • Code</div>
          </div>
        </a>

        <nav className="hidden lg:block">{nav}</nav>

        <button className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-blue-100" aria-label="menu" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-4 pb-4">
          {nav}
        </div>
      )}
    </header>
  )
}
