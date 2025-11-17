import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      const data = await res.json()
      if(res.ok){
        setStatus('Message received! I will get back to you soon.')
        e.target.reset()
      } else {
        setStatus(data?.detail || 'Something went wrong.')
      }
    } catch (err){
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-slate-900/50 border border-white/10">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" className="px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder:text-blue-200/60 outline-none focus:ring-cyan-400/40" required/>
            <input name="email" type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder:text-blue-200/60 outline-none focus:ring-cyan-400/40" required/>
          </div>
          <textarea name="message" rows="5" placeholder="Say hi..." className="mt-4 w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white placeholder:text-blue-200/60 outline-none focus:ring-cyan-400/40" required></textarea>
          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold"><Send size={18}/> Send</button>
            <span className="text-sm text-blue-200/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
