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
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-3">Quick demo data</h3>
        <div className="flex items-center gap-3">
          <button disabled={busy} onClick={() => seed('products')} className="px-3 py-2 rounded-lg bg-white text-slate-900">Seed products</button>
          <button disabled={busy} onClick={() => seed('tracks')} className="px-3 py-2 rounded-lg bg-blue-600 text-white">Seed tracks</button>
          {msg && <span className="text-blue-200">{msg}</span>}
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
