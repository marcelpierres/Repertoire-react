'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      id="sideNav"
      className="fixed top-0 left-0 z-50 w-full lg:w-[17rem] lg:h-screen bg-primary flex flex-col"
    >
      {/* Brand / profile */}
      <div className="flex items-center justify-between px-4 py-3 lg:flex-col lg:py-4 lg:px-0">
        <a
          className="flex items-center lg:flex-col lg:mx-auto lg:mb-0"
          href="/#page-top"
        >
          {/* Mobile: show name text */}
          <span className="text-white font-bold text-lg lg:hidden">
            Marcel-Pierre Samuels
          </span>
          {/* Desktop: show profile picture */}
          <span className="hidden lg:block mt-4">
            <Image
              src="/img/profpic31.jpg"
              alt="Marcel-Pierre Samuels"
              width={160}
              height={160}
              className="rounded-full border-[8px] border-white/20 mx-auto"
            />
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } lg:flex flex-col w-full mb-auto`}
      >
        <ul className="flex flex-col w-full">
          {[
            { href: '/#about', label: 'Profile' },
            { href: '/#experience', label: 'Projects' },
            { href: '/#education', label: 'Education' },
            { href: '/#cert', label: 'Certifications' },
            { href: '/#workex', label: 'Work Experience' },
            { href: '/#skills', label: 'Skills' },
            { href: '/#interests', label: 'Interests' },
            { href: '/#hobbies', label: 'Photography' },
            { href: '/chat', label: 'Talk To Me' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-white font-extrabold uppercase tracking-[0.05rem] text-sm hover:text-white/80 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
