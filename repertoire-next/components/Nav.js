'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/#about',    label: 'Profile' },
  { href: '/#experience', label: 'Awards' },
  { href: '/#education', label: 'Education' },
  { href: '/#cert',     label: 'Certifications' },
  { href: '/#workex',   label: 'Work Experience' },
  { href: '/#skills',   label: 'Skills' },
  { href: '/#interests', label: 'Interests' },
  { href: '/#hobbies',  label: 'Photography' },
  { href: '/chat',      label: 'Talk To Me' },
]

export default function Nav() {
  const [isOpen, setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────────────────── */}
      <aside
        id="sideNav"
        className="hidden lg:flex fixed top-0 left-0 z-50 h-screen w-[17rem] flex-col overflow-hidden"
        style={{ background: 'linear-gradient(170deg, #00b4fb 0%, #0090d4 100%)' }}
      >
        {/* Decorative glow blob */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
        />

        {/* Profile */}
        <a href="/#page-top" className="group flex flex-col items-center pt-8 pb-4">
          <div className="relative mb-3">
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-full bg-white/25 blur-md scale-110" />
            <Image
              src="/img/profpic31.jpg"
              alt="Marcel-Pierre Samuels"
              width={136}
              height={136}
              className="relative rounded-full border-4 border-white/40 shadow-xl ring-2 ring-white/20 group-hover:border-white/70 transition-all duration-300"
            />
          </div>
          <span className="text-white font-bold text-lg leading-tight tracking-tight">
            Marcel-Pierre
          </span>
          <span className="mt-0.5 text-white/60 text-[0.65rem] font-bold uppercase tracking-[0.18rem]">
            Samuels
          </span>
        </a>

        {/* Divider */}
        <div className="mx-5 mb-3 h-px bg-white/15" />

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-white/75 font-bold text-xs uppercase tracking-[0.08rem] hover:bg-white/15 hover:text-white transition-all duration-150"
                >
                  {/* Active indicator bar */}
                  <span className="h-4 w-[3px] rounded-full bg-white/0 group-hover:bg-white shrink-0 transition-all duration-200" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-4 py-3 text-center text-white/35 text-[10px] font-medium">
          © {new Date().getFullYear()} Marcel-Pierre Samuels
        </div>
      </aside>

      {/* ── Mobile Top Bar ───────────────────────────────────────── */}
      <header
        className={`lg:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 h-14 transition-all duration-200 ${
          scrolled || isOpen
            ? 'backdrop-blur-md bg-primary/90 shadow-lg'
            : 'bg-primary'
        }`}
      >
        <a href="/#page-top" className="flex items-center gap-2.5">
          <Image
            src="/img/profpic31.jpg"
            alt="M"
            width={30}
            height={30}
            className="rounded-full border border-white/40"
          />
          <span className="text-white font-bold text-sm tracking-tight">
            Marcel-Pierre Samuels
          </span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-1.5 rounded-lg hover:bg-white/15 focus:outline-none transition-colors"
          aria-label="Toggle navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* ── Mobile Dropdown Menu ─────────────────────────────────── */}
      {isOpen && (
        <div className="lg:hidden fixed top-14 inset-x-0 z-40 backdrop-blur-md bg-primary/95 border-t border-white/10 shadow-xl">
          <ul className="flex flex-col gap-0.5 p-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-lg text-white/80 font-bold text-xs uppercase tracking-[0.08rem] hover:bg-white/15 hover:text-white transition-all"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
