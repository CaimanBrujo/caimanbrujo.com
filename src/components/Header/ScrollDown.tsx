import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ScrollDown() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) setShow(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text transition-opacity duration-700 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ChevronDown className="w-12 h-12 animate-bounce" />
    </div>
  )
}
