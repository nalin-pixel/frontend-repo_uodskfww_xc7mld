import { useState } from 'react'

function AdminPanel() {
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  const seed = async (what) => {
    setBusy(true)
    setMsg('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/seed/${what}`, { method: 'POST' })
      const data = await res.json()
      setMsg(`Inserted ${data.inserted.length} ${what}`)
    } catch (e) {
      setMsg(`Error: ${e.message}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="bg-zinc-900/60 border border-amber-500/20 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-3">Quick demo data</h3>
        <div className="flex items-center gap-3">
          <button disabled={busy} onClick={() => seed('products')} className="px-3 py-2 rounded-lg bg-white text-black">Seed products</button>
          <button disabled={busy} onClick={() => seed('tracks')} className="px-3 py-2 rounded-lg bg-amber-500 text-black">Seed tracks</button>
          {msg && <span className="text-amber-200">{msg}</span>}
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
