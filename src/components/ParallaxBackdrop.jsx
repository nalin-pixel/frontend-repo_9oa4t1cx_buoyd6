import React, { useEffect, useRef } from 'react'

// Lightweight parallax using transform; disabled for reduced motion
const ParallaxBackdrop = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translateY(${Math.min(40, y * 0.06)}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div aria-hidden ref={ref} className="pointer-events-none fixed inset-x-0 top-0 z-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-28 grid grid-cols-6 gap-3 opacity-40">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="h-2 rounded-full bg-orange-200/40" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParallaxBackdrop
