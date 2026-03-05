'use client'

import { useState } from 'react'

const slides = [
  { src: '/img/bestbuy/IMG1.jpg', alt: 'Repair work 1' },
  { src: '/img/bestbuy/IMG2.jpg', alt: 'Repair work 2' },
  { src: '/img/bestbuy/IMG3.jpg', alt: 'Repair work 3' },
  { src: '/img/bestbuy/IMG4.jpg', alt: 'Repair work 4' },
  { src: '/img/bestbuy/IMG5.jpg', alt: 'Repair work 5' },
  { src: '/img/bestbuy/IMG6.jpg', alt: 'Repair work 6' },
  { src: '/img/bestbuy/IMG7.jpg', alt: 'Repair work 7' },
  { src: '/img/bestbuy/IMG8.jpg', alt: 'Repair work 8' },
  { src: '/img/tech/IMG1.JPG',   alt: 'Tech photography 1' },
  { src: '/img/tech/IMG2.JPG',   alt: 'Tech photography 2' },
  { src: '/img/tech/IMG3.JPG',   alt: 'Tech photography 3' },
  { src: '/img/tech/IMG4.JPG',   alt: 'Tech photography 4' },
  { src: '/img/tech/IMG5.jpg',   alt: 'Tech photography 5' },
]

export default function Slide() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <section id="hobbies" className="relative overflow-hidden">

      {/* Section header */}
      <div className="px-3 lg:px-12 py-10 bg-dot-grid">
        <span className="section-badge">Hobby</span>
        <h2 className="mb-0">Photography</h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full bg-gray-950" style={{ minHeight: '360px' }}>

        {/* Slide image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current}
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full object-cover"
          style={{ maxHeight: '70vh' }}
        />

        {/* Side gradient overlays for button contrast */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent" />

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xl hover:bg-primary hover:border-primary transition-all duration-200 shadow-lg"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xl hover:bg-primary hover:border-primary transition-all duration-200 shadow-lg"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Slide counter badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold">
          {current + 1} / {slides.length}
        </div>

        {/* Dot indicators — active dot stretches (pill shape) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`rounded-full transition-all duration-200 ${
                idx === current
                  ? 'w-5 h-2 bg-primary'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
