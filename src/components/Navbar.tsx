import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentSentinel = sentinelRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    if (currentSentinel) observer.observe(currentSentinel)

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel)
    }
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-[1px] w-full"></div>

      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isSticky
            ? 'opacity-100 pointer-events-auto bg-black/50 backdrop-blur-md'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center gap-8 text-text">
          <a href="#home" className="hover:text-muted transition-colors">
            Home
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
