import ProjectsCarousel from './ProjectsCarousel'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="flex flex-col items-center text-center relative">
        <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange-1)] via-[var(--color-orange-2)] to-[var(--color-orange-3)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          Projects
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-muted max-w-2xl">
          Some cool things I have built.
        </p>

        <div className="absolute -bottom-4 w-24 h-[3px] bg-gradient-to-r from-[var(--color-orange-1)] via-[var(--color-orange-2)] to-[var(--color-orange-3)] rounded-full animate-pulse"></div>
      </div>

      <div className="mt-16">
        <ProjectsCarousel />
      </div>

      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-orange-1)" />
          <stop offset="50%" stopColor="var(--color-orange-2)" />
          <stop offset="100%" stopColor="var(--color-orange-3)" />
        </linearGradient>
      </svg>
    </section>
  )
}
