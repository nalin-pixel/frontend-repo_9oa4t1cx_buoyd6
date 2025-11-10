import React, { useEffect, useMemo } from 'react'

// A lightweight, accessible SVG "3D feel" hero where a coconut opens and oil flows
// Motion respects prefers-reduced-motion
const Hero = () => {
  const prefersReduced = useMemo(() => (
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ), [])

  useEffect(() => {
    // No JS animation needed; CSS handles it. This hook remains for future hooks if needed.
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle radial highlight behind the coconut */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[60vh] w-[60vh] max-w-[90vw] rounded-full bg-gradient-to-b from-orange-200/40 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-geist text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Pure Coconut Oil, Naturally Refined
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
            Silky, cold-pressed goodness. Crafted for skin, hair, and everyday nourishment.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#benefits" className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
              Explore benefits
            </a>
            <a href="#cta" className="inline-flex items-center rounded-full border border-orange-200 px-6 py-3 text-orange-600 transition hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
              Buy now
            </a>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative mt-14 md:mt-20">
          <div className="mx-auto h-[380px] w-full max-w-4xl rounded-3xl bg-gradient-to-b from-white to-orange-50 shadow-inner ring-1 ring-orange-100/70">
            <div className="relative h-full w-full">
              {/* Coconut + Oil SVG */}
              <svg
                role="img"
                aria-label="Illustration of a coconut opening with oil flowing"
                viewBox="0 0 800 400"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient id="oilGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                  <radialGradient id="shellGrad" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#8B5E3C" />
                    <stop offset="100%" stopColor="#5B3A21" />
                  </radialGradient>
                  <clipPath id="oilClip">
                    {/* Clip area beneath the top shell so oil looks like it pours out */}
                    <rect x="0" y="0" width="800" height="400" />
                  </clipPath>
                  <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#00000022" />
                  </filter>
                </defs>

                {/* Palm leaves background accents */}
                <g opacity="0.25" className="animate-sway origin-[0_0]">
                  <path d="M40,40 C140,20 190,80 240,40 C290,0 360,40 380,60" stroke="#059669" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M70,80 C160,70 210,120 260,80 C300,50 360,80 390,110" stroke="#10B981" strokeWidth="6" fill="none" strokeLinecap="round" />
                </g>
                <g opacity="0.25" className="animate-sway-slow origin-[800px_0]">
                  <path d="M760,60 C660,40 610,100 560,60 C510,20 440,60 420,80" stroke="#059669" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M730,100 C640,90 590,140 540,100 C500,70 440,100 410,130" stroke="#10B981" strokeWidth="6" fill="none" strokeLinecap="round" />
                </g>

                {/* Bottom coconut half */}
                <g filter="url(#softShadow)" className="origin-center">
                  <ellipse cx="400" cy="255" rx="140" ry="90" fill="url(#shellGrad)" />
                  <ellipse cx="400" cy="245" rx="118" ry="72" fill="#F5F5F5" />
                </g>

                {/* Oil flow path */}
                <g clipPath="url(#oilClip)">
                  <path
                    d="M400 180 C 420 210, 420 230, 410 260 C 400 290, 430 305, 430 330 C 430 355, 400 360, 385 360"
                    fill="none"
                    stroke="url(#oilGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className={prefersReduced ? '' : 'animate-oil-flow'}
                  />
                  {/* A subtle glossy droplet at the end */}
                  <ellipse cx="385" cy="360" rx="8" ry="10" fill="url(#oilGrad)" className={prefersReduced ? '' : 'animate-drip'} />
                </g>

                {/* Top coconut half opening */}
                <g className={prefersReduced ? '' : 'animate-open origin-[400px_180px]'}>
                  <ellipse cx="400" cy="180" rx="122" ry="78" fill="#F5F5F5" />
                  <ellipse cx="400" cy="170" rx="144" ry="92" fill="url(#shellGrad)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(0.5deg) translateY(0px); }
          50% { transform: rotate(-0.5deg) translateY(2px); }
        }
        .animate-sway { animation: sway 6s ease-in-out infinite; }
        .animate-sway-slow { animation: sway 10s ease-in-out infinite; }

        @keyframes openHalf {
          0% { transform: rotate(0deg) translateY(0px); }
          30% { transform: rotate(-14deg) translateY(-6px); }
          60% { transform: rotate(-10deg) translateY(-2px); }
          100% { transform: rotate(-12deg) translateY(-4px); }
        }
        .animate-open { animation: openHalf 2.8s cubic-bezier(.22,.61,.36,1) 0.4s both; }

        @keyframes oilFlow {
          0% { stroke-dasharray: 1, 260; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 150, 110; stroke-dashoffset: -40; }
          100% { stroke-dasharray: 1, 260; stroke-dashoffset: -120; }
        }
        .animate-oil-flow { animation: oilFlow 4.2s ease-in-out infinite; }

        @keyframes drip {
          0%, 60% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(6px); opacity: 0.9; }
          100% { transform: translateY(10px); opacity: 0.0; }
        }
        .animate-drip { animation: drip 2.6s ease-in-out infinite; transform-origin: center; }
      `}</style>
    </section>
  )
}

export default Hero
