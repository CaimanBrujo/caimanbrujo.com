import StackCard from './Stack/StackCard'
import SphereIcons from './Stack/SphereIcons'
import StacksAnimated from './Stack/StacksAnimated'

export default function Main() {
  return (
    <main className="relative bg-background z-50 mt-[100vh] flex-1 flex flex-col items-center justify-start min-h-[100vh]">
      <div className="flex flex-col mt-40 mb-10 md:flex-row md:justify-between w-full max-w-[1200px] gap-8 md:gap-0">
        <StackCard />
        <SphereIcons />
      </div>
      <StacksAnimated />
    </main>
  )
}
