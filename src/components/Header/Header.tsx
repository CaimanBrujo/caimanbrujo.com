import CanvasParticles from './CanvasParticles'
import Hero from './Hero'
import ScrollDown from './ScrollDown'

export default function Header() {
  return (
    <header className="fixed top-0 z-0 w-full h-[100vh] bg-background text-text overflow-hidden flex items-start px-4 sm:px-8">
      <CanvasParticles />
      <div className="relative z-10 w-full flex items-center justify-between">
        <Hero />
      </div>
      <ScrollDown />
    </header>
  )
}
