import { Music, ShoppingBag, Coffee, Play, ArrowRight } from 'lucide-react'

function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center py-24 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm mb-6">
          <Music size={16} />
          Original music • Fashion • Coffee
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          One home for my sound and style
        </h1>
        <p className="mt-5 text-blue-100/90 text-lg max-w-2xl mx-auto">
          Stream my latest tracks, shop the clothing line, and get a taste of the upcoming coffee roasts.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => onExplore('music')} className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-5 py-3 rounded-lg hover:shadow-lg transition">
            <Play size={18} />
            Listen to music
          </button>
          <button onClick={() => onExplore('shop')} className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-500 transition">
            Shop the brand
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 text-blue-200">
          <div className="inline-flex items-center gap-2"><ShoppingBag size={18} /> Apparel</div>
          <div className="inline-flex items-center gap-2"><Coffee size={18} /> Coffee</div>
          <div className="inline-flex items-center gap-2"><Music size={18} /> Tracks</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
