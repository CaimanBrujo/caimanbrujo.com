import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import todo from '../../../assets/projectscarousel/todo.png'
import adminpage from '../../../assets/projectscarousel/adminpage.png'
import form from '../../../assets/projectscarousel/form.png'
import tictactoe from '../../../assets/projectscarousel/tictactoe.png'

const slides = [
  {
    src: todo,
    caption: 'Todo App (REACT + TS + TAILWIND)',
    link: 'https://todo-list-app-ten-nu.vercel.app/'
  },
  {
    src: adminpage,
    caption: 'Admin Page (HTML + CSS)',
    link: 'https://caimanbrujo.github.io/the-odin-project-intermediate/'
  },
  {
    src: form,
    caption: 'Form Project (HTML + CSS)',
    link: 'https://caimanbrujo.github.io/the-odin-project-intermediate/pages/sing-up-form/'
  },
  {
    src: tictactoe,
    caption: 'Tic Tac Toe (WEBPACK + JS)',
    link: 'https://caimanbrujo.github.io/the-odin-project-javascript/tic-tac-toe/'
  }
]

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState<'fade-in' | 'fade-out'>('fade-in')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fadeDuration = 500
  const fadeInDelay = 600

  const handleSlideChange = useCallback((newIndex: number) => {
    setFadeClass('fade-out')
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setTimeout(() => {
        setFadeClass('fade-in')
      }, fadeInDelay)
    }, fadeDuration)
  }, [])

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      handleSlideChange((currentIndex + 1) % slides.length)
    }, 7000)
  }, [currentIndex, handleSlideChange])

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % slides.length)
    startAutoSlide()
  }

  const prevSlide = () => {
    handleSlideChange(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
    startAutoSlide()
  }

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoSlide])

  return (
    <section className="mb-40 relative w-full max-w-6xl mx-auto overflow-hidden border-4 border-[var(--color-orange-2)] rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.3)]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.src}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <a
        href={slides[currentIndex].link}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 px-5 py-2 rounded-lg backdrop-blur-sm bg-[rgba(255,255,255,0.05)] border border-border text-text text-xl sm:text-3xl font-semibold shadow-md transition-opacity duration-500 ease-in-out ${
          fadeClass === 'fade-in' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {slides[currentIndex].caption}
      </a>

      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-5 sm:p-7 rounded-full bg-[rgba(255,255,255,0.05)] border border-border backdrop-blur-md hover:bg-[var(--color-orange-2)] hover:text-background transition"
      >
        <ChevronLeft className="w-10 h-10 sm:w-16 sm:h-16 text-text" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-5 sm:p-7 rounded-full bg-[rgba(255,255,255,0.05)] border border-border backdrop-blur-md hover:bg-[var(--color-orange-2)] hover:text-background transition"
      >
        <ChevronRight className="w-10 h-10 sm:w-16 sm:h-16 text-text" />
      </button>
    </section>
  )
}
