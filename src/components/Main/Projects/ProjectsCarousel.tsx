import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import todo from '../../../assets/projectscarousel/todo.png'
import adminpage from '../../../assets/projectscarousel/adminpage.png'
import form from '../../../assets/projectscarousel/form.png'
import tictactoe from '../../../assets/projectscarousel/tictactoe.png'
import etch from '../../../assets/projectscarousel/etch.png'

const slides = [
  { src: todo, caption: 'Todo List' },
  { src: adminpage, caption: 'Admin Page' },
  { src: form, caption: 'Form Project' },
  { src: tictactoe, caption: 'Tic Tac Toe' },
  { src: etch, caption: 'Etch A Sketch' }
]

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const nextSlide = () => {
    setIsVisible(false) // 👈 Ocultar caption antes de cambiar
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
      setIsVisible(true) // 👈 Mostrar caption después del cambio
    }, 200) // corto delay para el fade-out
  }

  const prevSlide = () => {
    setIsVisible(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setIsVisible(true)
    }, 200)
  }

  useEffect(() => {
    setIsVisible(true) // 👈 Mostrar el primer caption al cargar
    const interval = setInterval(() => {
      nextSlide()
    }, 7000) // Autoslide lento (7s)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full max-w-6xl mx-auto overflow-hidden border-4 border-[var(--color-orange-2)] rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.3)]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
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
            {/* Caption */}
            {index === currentIndex && (
              <div
                className={`absolute bottom-20 left-1/2 -translate-x-1/2 px-5 py-2 rounded-lg backdrop-blur-md bg-[rgba(0,0,0,0.2)] text-white text-xl sm:text-3xl font-semibold shadow-md transition-opacity duration-1000 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-5 sm:p-7 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md hover:bg-[rgba(0,0,0,0.7)] transition"
      >
        <ChevronLeft className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-5 sm:p-7 rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md hover:bg-[rgba(0,0,0,0.7)] transition"
      >
        <ChevronRight className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
      </button>
    </section>
  )
}
