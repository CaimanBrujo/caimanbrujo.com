import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [flash, setFlash] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentSentinel = sentinelRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setFlash(true)
          setTimeout(() => setFlash(false), 150)
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      },
      { threshold: 0 }
    )

    if (currentSentinel) {
      observer.observe(currentSentinel)
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel)
      }
    }
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-[1px] w-full"></div>

      <nav
        className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
          flash
            ? 'bg-muted'
            : isSticky
              ? 'bg-black/50 backdrop-blur-md'
              : 'bg-black'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto px-4 py-3 flex justify-center gap-8 text-m transition-colors duration-500 ${
            isSticky ? 'text-text' : 'text-black'
          }`}
        >
          <a href="#about" className="hover:text-muted transition-colors">
            About
          </a>
          <a href="#stack" className="hover:text-muted transition-colors">
            Stack
          </a>
          <a href="#projects" className="hover:text-muted transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-muted transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </>
  )
}
