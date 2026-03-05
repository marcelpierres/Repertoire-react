'use client'

import { useState } from 'react'

const images = [
  '/img/bestbuy/IMG1.jpg',
  '/img/bestbuy/IMG2.jpg',
  '/img/bestbuy/IMG3.jpg',
  '/img/bestbuy/IMG4.jpg',
  '/img/bestbuy/IMG5.jpg',
  '/img/bestbuy/IMG6.jpg',
  '/img/bestbuy/IMG7.jpg',
  '/img/bestbuy/IMG8.jpg',
  '/img/tech/IMG1.JPG',
  '/img/tech/IMG2.JPG',
  '/img/tech/IMG3.JPG',
  '/img/tech/IMG4.JPG',
  '/img/tech/IMG5.jpg',
]

const alts = [
  'Repair 1', 'Repair 2', 'Repair 3', 'Repair 4',
  'Repair 5', 'Repair 6', 'Repair 7', 'Repair 8',
  'Tech 1', 'Tech 2', 'Tech 3', 'Tech 4', 'Tech 5',
]

export default function Slide() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <section id="hobbies" className="relative overflow-hidden bg-black">
      {/* Image */}
      <div className="relative w-full" style={{ minHeight: '300px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt={alts[current]}
          className="w-full object-cover"
        />

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === current ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
