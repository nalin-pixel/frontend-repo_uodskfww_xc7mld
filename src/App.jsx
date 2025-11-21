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

  const logoUrl = 'https://drive.google.com/uc?export=download&id=1-bUHIdsmcdHPa8-M74fhMj6inu77R_iH'

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-amber-500/20">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Napoleon Complex logo" className="h-9 w-9 object-contain rounded" />
            <span className="font-semibold tracking-tight gold-text animate-gold">Napoleon Complex</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <button onClick={() => handleExplore('music')} className="text-amber-200 hover:text-white transition">Music</button>
            <button onClick={() => handleExplore('shop')} className="text-amber-200 hover:text-white transition">Shop</button>
          </nav>
        </div>
      </header>

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
