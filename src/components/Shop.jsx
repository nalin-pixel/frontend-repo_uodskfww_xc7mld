import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${baseUrl}/products`)
        if (filter !== 'all') url.searchParams.set('category', filter)
        const res = await fetch(url.toString())
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [filter])

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Shop</h2>
        <div className="flex gap-2">
          {['all','clothing','coffee'].map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-lg text-sm border ${filter===c? 'bg-white text-slate-900 border-white':'bg-white/10 text-blue-100 border-white/20'}`}>{c.charAt(0).toUpperCase()+c.slice(1)}</button>
          ))}
        </div>
      </div>

      {loading && <div className="text-blue-200">Loading products...</div>}
      {error && <div className="text-red-300">{error}</div>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            {p.image && <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />}
            <div className="p-4">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-blue-200">${p.price.toFixed(2)}</span>
                <button className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1.5 rounded-lg">
                  <ShoppingBag size={16} /> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && !loading && !error && (
        <div className="mt-6 text-blue-200">
          No products yet. Use the Seed buttons below to add sample items.
        </div>
      )}
    </section>
  )
}

export default Shop
