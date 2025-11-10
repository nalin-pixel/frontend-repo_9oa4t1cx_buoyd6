import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Bring home the glow</h2>
              <p className="mt-3 text-gray-600">Crafted in small batches, bottled fresh. Free shipping over $30 and a 30‑day happiness guarantee.</p>
              <div className="mt-6 flex items-center gap-4">
                <a href="#" className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">Add to cart</a>
                <a href="#ingredients" className="inline-flex items-center rounded-full border border-orange-200 px-6 py-3 text-orange-600 transition hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">Ingredients</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.15),transparent_60%)]"></div>
              <img src="https://images.unsplash.com/photo-1594813591867-02e797aa4581?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHbGFzcyUyMGphciUyMG9mJTIwY29jb251dCUyMG9pbHxlbnwwfDB8fHwxNzYyNzU0MjAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Glass jar of coconut oil" className="relative z-10 w-full rounded-2xl shadow-md transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
