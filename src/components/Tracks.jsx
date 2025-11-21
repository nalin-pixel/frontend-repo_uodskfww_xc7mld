import { useEffect, useState } from 'react'
import { PlayCircle } from 'lucide-react'

function Tracks() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/tracks`)
        if (!res.ok) throw new Error('Failed to load tracks')
        const data = await res.json()
        setTracks(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTracks()
  }, [])

  if (loading) return <div className="text-blue-200">Loading tracks...</div>
  if (error) return <div className="text-red-300">{error}</div>

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-white mb-6">Latest tracks</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tracks.map(t => (
          <div key={t.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400/40 transition">
            {t.cover && <img src={t.cover} alt={t.title} className="h-40 w-full object-cover" />}
            <div className="p-4">
              <h3 className="text-white font-semibold">{t.title}</h3>
              <p className="text-blue-200 text-sm">{t.artist}</p>
              <div className="mt-3">
                <a href={t.audio_url || t.external_url || '#'} target="_blank" className="inline-flex items-center gap-2 text-blue-300 hover:text-white">
                  <PlayCircle size={18} /> Listen
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tracks
