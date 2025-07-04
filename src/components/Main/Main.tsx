import StackCard from './Stack/StackCard'
import SphereIcons from './Stack/SphereIcons'
import StacksAnimated from './Stack/StacksAnimated'
import Projects from './Projects/Projects'

export default function Main() {
  return (
    <main
      id="stack"
      className="relative bg-background z-40 mt-[100vh] flex-1 flex flex-col items-center justify-start min-h-[100vh]"
    >
      <div id="stack"></div>
      <div className="flex bg-background flex-col mt-30 mb-42 md:flex-row md:justify-between w-full max-w-[1200px] gap-8 md:gap-0">
        <StackCard />
        <SphereIcons />
      </div>
      <StacksAnimated />
      <Projects />
    </main>
  )
}
