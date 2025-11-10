import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import ParallaxBackdrop from './components/ParallaxBackdrop'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ParallaxBackdrop />
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <section id="ingredients" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-3xl border border-orange-100 p-8 md:p-12 bg-white/60 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-semibold">Just one ingredient</h2>
              <p className="mt-3 text-gray-600">100% cold-pressed coconut oil. No additives. No fragrance. Nothing else.</p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <p className="text-sm text-gray-700">Ethically sourced from smallholder farms</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <p className="text-sm text-gray-700">Cold-pressed and micro-filtered for clarity</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <p className="text-sm text-gray-700">Vegan, cruelty-free, and zero parabens</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <p className="text-sm text-gray-700">Packaged in recyclable glass</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Benefits />
        <CTA />
      </main>
      <footer className="border-t border-orange-100 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CocoPure — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
