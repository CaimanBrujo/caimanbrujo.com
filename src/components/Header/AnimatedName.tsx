import { useEffect, useState } from 'react'

export default function AnimatedName() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[2.8rem] overflow-hidden">
      <div className="relative w-full h-full">
        <span
          className={`absolute inset-0 text-4xl font-bold text-text pb-2 transition-all duration-700 ease-out ${
            flipped
              ? 'opacity-0 -translate-y-4 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
        >
          Nicolás Bugedo
        </span>
        <span
          className={`absolute inset-0 text-4xl font-bold text-text pb-2 transition-all duration-700 ease-out ${
            flipped
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          Caimán Brujo
        </span>
      </div>
    </div>
  )
}
