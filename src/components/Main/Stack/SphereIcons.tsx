import { useRef, useEffect, useState } from 'react'

const iconNames = [
  'css',
  'eslint',
  'figma',
  'git',
  'github',
  'html',
  'jest',
  'js',
  'prettier',
  'ps',
  'react',
  'tailwind',
  'ts',
  'vite',
  'webpack'
]

const ICON_PATH = '/src/assets/svg-icons/'
const BASE_CANVAS_SIZE = 250
const BASE_RADIUS = 150
const BASE_ICON_SIZE = 60

interface Vec3 {
  x: number
  y: number
  z: number
}

export default function SphereIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [iconsLoaded, setIconsLoaded] = useState(false)
  const icons = useRef<Record<string, HTMLImageElement>>({})
  const positions = useRef<Vec3[]>([])
  const rotation = useRef({ x: 0, y: 0 })
  const [canvasSize, setCanvasSize] = useState(BASE_CANVAS_SIZE)

  const radius = (canvasSize / BASE_CANVAS_SIZE) * BASE_RADIUS
  const iconSize = (canvasSize / BASE_CANVAS_SIZE) * BASE_ICON_SIZE

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const size = Math.min(containerRef.current.offsetWidth, 500)
        setCanvasSize(size)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Load icons
  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        iconNames.map(
          (name) =>
            new Promise<void>((resolve) => {
              const img = new Image()
              img.src = `${ICON_PATH}${name}.svg`
              img.onload = () => {
                icons.current[name] = img
                resolve()
              }
            })
        )
      )
      setIconsLoaded(true)
    }

    loadImages()
  }, [])

  // Generate 3D positions
  useEffect(() => {
    const count = iconNames.length
    const step = Math.PI * (3 - Math.sqrt(5))
    const offset = 2 / count
    const newPositions: Vec3[] = []

    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * step
      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r
      newPositions.push({ x: x * radius, y: y * radius, z: z * radius })
    }

    positions.current = newPositions
  }, [radius])

  // Animate
  useEffect(() => {
    if (!iconsLoaded) return

    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return

    const animate = () => {
      if (!canvasRef.current) return
      ctx.clearRect(0, 0, canvasSize, canvasSize)
      const center = canvasSize / 2

      positions.current.forEach((pos, i) => {
        const cosX = Math.cos(rotation.current.x)
        const sinX = Math.sin(rotation.current.x)
        const cosY = Math.cos(rotation.current.y)
        const sinY = Math.sin(rotation.current.y)

        let { x, y, z } = pos
        let y1 = y * cosX - z * sinX
        let z1 = y * sinX + z * cosX

        let x2 = x * cosY - z1 * sinY
        let z2 = x * sinY + z1 * cosY

        const scale = 0.5 + z2 / (2 * radius)
        const px = x2 * scale + center
        const py = y1 * scale + center

        const icon = icons.current[iconNames[i % iconNames.length]]
        if (icon) {
          ctx.save()
          ctx.globalAlpha = scale
          ctx.drawImage(
            icon,
            px - (iconSize * scale) / 2,
            py - (iconSize * scale) / 2,
            iconSize * scale,
            iconSize * scale
          )
          ctx.restore()
        }
      })

      rotation.current.x += 0.002
      rotation.current.y += 0.003

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [iconsLoaded, canvasSize, iconSize, radius])

  return (
    <div ref={containerRef} className="w-full max-w-[500px]">
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="block w-full bg-transparent"
      />
    </div>
  )
}
