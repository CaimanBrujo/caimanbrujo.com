import { useEffect, useState } from 'react'
import caiman1 from '../../assets/roundcaiman.png'
import caiman2 from '../../assets/roundnico.png'

export default function RotatingImage() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-square overflow-visible [perspective:1200px] p-[2px]">
      <div
        className={`relative w-full h-full transition-transform duration-2000 ease-in-out [transform-style:preserve-3d] overflow-visible will-change-transform ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <img
          src={caiman2}
          alt="Caiman 1"
          className="absolute inset-0 w-full h-full [backface-visibility:hidden]"
        />

        <img
          src={caiman1}
          alt="Caiman 2"
          className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]"
        />
      </div>
    </div>
  )
}
