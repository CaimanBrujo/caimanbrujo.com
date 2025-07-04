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
    <div className="relative mt-0 sm:mt-40 w-full flex justify-center">
      <section className="text-text px-6 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-12 rounded-xl max-w-6xl w-full mx-4">
        <div
          className={`max-w-sm w-full rounded-xl overflow-hidden transition-opacity duration-2000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <RotatingImage />
        </div>

        <div
          className={`flex flex-col gap-4 sm:gap-6 max-w-xl w-full rounded-2xl px-6 sm:px-8 py-8 sm:py-10 backdrop-blur-sm bg-[rgba(255,255,255,0.02)] border border-border transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AnimatedName />

          <p className="text-base sm:text-lg leading-relaxed text-text">
            <span className="block">
              I'm a Front-End Developer with a strong eye for clean design,
              responsive layouts, and interactive experiences.
            </span>
            <span className="block">
              Currently sharpening my skills in React and TypeScript, while
              finishing the Full-Stack path.
            </span>
          </p>

          <div className="flex gap-4 sm:gap-6 text-text self-end">
            <a
              href="https://github.com/CaimanBrujo"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:scale-110 transition-transform duration-300"
            >
              <Github size={28} strokeWidth={1.8} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicobugedo/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
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
