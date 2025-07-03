import {
  Bubbles,
  MonitorSmartphone,
  AlignVerticalJustifyCenter
} from 'lucide-react'

export default function StackCard() {
  return (
    <div className="relative flex flex-col items-center h-ful justify-between">
      <div className="relative h-fit w-fit max-w-sm sm:max-w-xl mx-auto rounded-2xl border border-border bg-[rgba(255,255,255,0.03)] backdrop-blur-sm px-6 py-8">
        <p className="text-xl font-medium text-muted tracking-wide">
          Development
        </p>

        <h2 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-orange-1)] via-[var(--color-orange-2)] to-[var(--color-orange-3)] mt-2">
          Stack
        </h2>

        <p className="text-xl text-muted mt-4 max-w-md mx-auto">
          These are the tools I use to design, build, and deploy seamless
          digital experiences.
        </p>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-20 w-[3px] bg-gradient-to-b from-[var(--color-orange-1)] to-[var(--color-orange-3)] rounded-full"></div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-sm sm:max-w-xl">
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-[rgba(255,255,255,0.02)] backdrop-blur-sm">
          <Bubbles
            className="w-10 h-10 stroke-[url(#gradient)]"
            style={{ stroke: 'url(#gradient)' }}
          />
          <p className="mt-2 text-sm font-medium text-text text-center">
            Clean Design
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-[rgba(255,255,255,0.02)] backdrop-blur-sm">
          <MonitorSmartphone
            className="w-10 h-10 stroke-[url(#gradient)]"
            style={{ stroke: 'url(#gradient)' }}
          />
          <p className="mt-2 text-sm font-medium text-text">Responsive</p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-[rgba(255,255,255,0.02)] backdrop-blur-sm">
          <AlignVerticalJustifyCenter
            className="w-10 h-10 stroke-[url(#gradient)]"
            style={{ stroke: 'url(#gradient)' }}
          />
          <p className="mt-2 text-sm font-medium text-text">Pixel Perfect</p>
        </div>
      </div>

      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-orange-1)" />
          <stop offset="50%" stopColor="var(--color-orange-2)" />
          <stop offset="100%" stopColor="var(--color-orange-3)" />
        </linearGradient>
      </svg>
    </div>
  )
}
