import SkillsCard from './SkillsCard'
import SphereIcons from './SphereIcons'

export default function Main() {
  return (
    <main className="relative bg-background z-50 mt-[100vh] pt-10 flex-1 flex flex-col items-center justify-start min-h-[100vh]">
      <SkillsCard />
      <SphereIcons />
    </main>
  )
}
