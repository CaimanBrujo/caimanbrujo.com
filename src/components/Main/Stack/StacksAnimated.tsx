import { useEffect, useRef } from 'react'

export default function StacksAnimated() {
  const tools = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Vite',
    'Webpack',
    'Jest',
    'ESLint',
    'Prettier',
    'Git',
    'Figma',
    'Photoshop'
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)

  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      if (!scrollRef.current || !containerRef.current) return

      offset.current -= 0.5
      const totalWidth = scrollRef.current.scrollWidth / 2
      if (Math.abs(offset.current) >= totalWidth) offset.current = 0

      scrollRef.current.style.transform = `translateX(${offset.current}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-6">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none z-10" />

      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background via-background/60 to-transparent pointer-events-none z-10" />

      <div ref={containerRef} className="overflow-hidden w-full h-8">
        <div
          ref={scrollRef}
          className="flex gap-12 text-sm text-muted font-light whitespace-nowrap will-change-transform"
        >
          {[...tools, ...tools].map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
