import React from 'react'

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur-md border-b border-orange-100/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">C</span>
          <span className="font-semibold tracking-tight text-gray-900">CocoPure</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#benefits" className="hover:text-gray-900 transition">Benefits</a>
          <a href="#ingredients" className="hover:text-gray-900 transition">Ingredients</a>
          <a href="#cta" className="hover:text-gray-900 transition">Shop</a>
        </nav>
        <a href="#cta" className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-white text-sm shadow-sm transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
          Buy Now
        </a>
      </div>
    </header>
  )
}

export default NavBar
