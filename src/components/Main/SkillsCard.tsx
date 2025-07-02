export default function SkillsCard() {
  const categories = [
    {
      title: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React', 'Tailwind CSS']
    },
    {
      title: 'Build Tools',
      items: ['Vite', 'Webpack']
    },
    {
      title: 'Version Control & Design',
      items: ['Git', 'Figma']
    },
    {
      title: 'Testing & Code Quality',
      items: ['Jest', 'ESLint', 'Prettier']
    }
  ]

  return (
    <div className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl px-4">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="group relative flex flex-col justify-between px-6 py-5 h-32 rounded-2xl border border-border bg-[rgba(255,255,255,0.02)] backdrop-blur-sm transition-all duration-500 ease-in-out hover:h-52 overflow-hidden cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-accent transition-colors duration-300 group-hover:text-white">
            {cat.title}
          </h3>
          <ul className="mt-2 text-text text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-1">
            {cat.items.map((item, i) => (
              <li key={i} className="list-disc list-inside">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
