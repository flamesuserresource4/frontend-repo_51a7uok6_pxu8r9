import { Github, Globe, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Panda Lifts Tracker',
    desc: 'A progressive web app to log workouts, visualize PRs, and generate training blocks.',
    tags: ['React', 'IndexedDB', 'Tailwind'],
    links: { demo: '#', github: '#' }
  },
  {
    title: 'NerdHub CLI',
    desc: 'Terminal tool that scaffolds full‑stack projects with batteries included.',
    tags: ['Python', 'FastAPI', 'Mongo'],
    links: { demo: '#', github: '#' }
  },
  {
    title: 'Anime Recommender',
    desc: 'LLM + embeddings pipeline that recommends anime based on vibes and arcs.',
    tags: ['Python', 'LLM', 'Vector DB'],
    links: { demo: '#', github: '#' }
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-white font-semibold text-lg">{p.title}</div>
                  <p className="text-blue-200/80 text-sm mt-1">{p.desc}</p>
                </div>
                <Code2 className="text-cyan-300/80" />
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-blue-200/80">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-5">
                <a href={p.links.demo} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm"><Globe size={16}/>Demo</a>
                <a href={p.links.github} className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm"><Github size={16}/>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
