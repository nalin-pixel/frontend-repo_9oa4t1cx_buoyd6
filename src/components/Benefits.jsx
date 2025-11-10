import React from 'react'

const benefits = [
  {
    title: 'Cold-Pressed Purity',
    desc: 'Extracted at low temperatures to preserve nutrients and aroma.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M12 2 C12 2 7 8 7 12 a5 5 0 0 0 10 0 C17 8 12 2 12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Skin + Hair Loving',
    desc: 'Naturally moisturizing and soothing for daily rituals.',
    icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zm1 5h-2v6h2V8zm0 8h-2v2h2v-2z" fill="currentColor" />
        </svg>
    ),
  },
  {
    title: 'Sustainably Sourced',
    desc: 'Responsibly harvested from smallholder farms.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path d="M12 22s8-4 8-10a8 8 0 0 0-16 0c0 6 8 10 8 10z" fill="currentColor" />
      </svg>
    ),
  },
]

const Benefits = () => {
  return (
    <section id="benefits" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 group-hover:scale-105 transition">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
