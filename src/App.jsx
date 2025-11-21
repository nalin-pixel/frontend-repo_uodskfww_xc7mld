import { useRef } from 'react'
import Hero from './components/Hero'
import Tracks from './components/Tracks'
import Shop from './components/Shop'
import AdminPanel from './components/AdminPanel'

function App() {
  const musicRef = useRef(null)
  const shopRef = useRef(null)

  const handleExplore = (section) => {
    if (section === 'music' && musicRef.current) {
      musicRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (section === 'shop' && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Hero onExplore={handleExplore} />

      <div ref={musicRef}>
        <Tracks />
      </div>

      <div ref={shopRef}>
        <Shop />
      </div>

      <AdminPanel />

      <footer className="border-t border-amber-500/20 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-amber-200/80">
          © {new Date().getFullYear()} Napoleon Complex — All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default App
