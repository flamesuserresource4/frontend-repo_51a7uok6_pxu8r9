import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="fixed inset-0 -z-10 opacity-[0.35] bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,211,238,0.15),transparent),radial-gradient(40%_30%_at_80%_20%,rgba(59,130,246,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero3D />

        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-cyan-500/10 blur-2xl rounded-3xl" />
              <div className="relative p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
                <p className="mt-3 text-blue-200/85">
                  I’m Anabolic Panda — I love the iron, I love shipping code, and I love nerd culture. I bring the same
                  consistency and progressive overload from the gym into my engineering craft. When I’m not lifting,
                  I’m building full‑stack apps, optimizing DX, or theory‑crafting gaming builds.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[url('https://images.unsplash.com/photo-1517963628607-235ccdd5476c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />

        <footer className="py-10 text-center text-sm text-blue-300/60">
          <p>© {new Date().getFullYear()} Anabolic Panda • Built with vibes.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
