import { Music, ShoppingBag, Coffee, Play, ArrowRight } from 'lucide-react'

function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center py-24 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200 text-sm mb-6">
          <Music size={16} />
          Napoleon Complex • Music • Fashion • Coffee
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight gold-text animate-gold">
          Napoleon Complex
        </h1>
        <p className="mt-5 text-zinc-200/90 text-lg max-w-2xl mx-auto">
          One home for the sound and style. Stream new tracks, shop the apparel, and get ready for the coffee drop.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => onExplore('music')} className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-lg hover:shadow-lg transition">
            <Play size={18} />
            Listen to music
          </button>
          <button onClick={() => onExplore('shop')} className="inline-flex items-center gap-2 bg-amber-500 text-black font-semibold px-5 py-3 rounded-lg hover:bg-amber-400 transition">
            Shop the brand
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 text-amber-200">
          <div className="inline-flex items-center gap-2 hover-gold hover-animate-gold"><ShoppingBag size={18} /> Apparel</div>
          <div className="inline-flex items-center gap-2 hover-gold hover-animate-gold"><Coffee size={18} /> Coffee</div>
          <div className="inline-flex items-center gap-2 hover-gold hover-animate-gold"><Music size={18} /> Tracks</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
