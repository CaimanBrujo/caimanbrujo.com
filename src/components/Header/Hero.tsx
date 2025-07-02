import { useEffect, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'
import RotatingImage from './RotatingImage'
import AnimatedName from './AnimatedName'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative mt-4 sm:-mt-32 w-full flex justify-center">
      <section className=" text-text px-6 py-12 flex flex-col lg:flex-row items-center justify-center gap-12 rounded-xl max-w-6xl w-full mx-4">
        <div
          className={`max-w-sm w-full rounded-xl overflow-hidden transition-opacity duration-2000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <RotatingImage />
        </div>

        <div
          className={`flex flex-col gap-6 max-w-xl w-full rounded-2xl px-8 py-10 backdrop-blur-sm bg-[rgba(255,255,255,0.02)] border border-border transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AnimatedName />

          <p className="text-lg leading-relaxed text-text mb-6">
            <span className="block">
              I'm a Front-End Developer with a strong eye for clean design,
              responsive layouts, and interactive experiences.
            </span>
            <span className="block">
              Currently deepening my skills in React and TypeScript, while
              walking the Full-Stack path.
            </span>
          </p>

          <div className="flex gap-6 text-text self-end">
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-accent hover:scale-110 transition-transform duration-300"
            >
              <Github size={28} strokeWidth={1.8} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-accent hover:scale-110 transition-transform duration-300"
            >
              <Linkedin size={28} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
