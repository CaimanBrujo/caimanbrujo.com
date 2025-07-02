import { useEffect, useRef } from 'react'

export default function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0

    const styles = getComputedStyle(document.documentElement)
    const colors = [
      styles.getPropertyValue('--color-orange-1').trim(),
      styles.getPropertyValue('--color-orange-2').trim(),
      styles.getPropertyValue('--color-orange-3').trim()
    ]

    const particles: {
      x: number
      y: number
      r: number
      dx: number
      dy: number
      color: string
    }[] = []

    function initParticles() {
      particles.length = 0
      const count = Math.floor((width * height) / 5000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 6 + 2,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    function resizeCanvas() {
      if (!canvas || !context) return
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.scale(dpr, dpr)
      initParticles()
    }

    function animate() {
      if (!context) return

      context.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > width) p.dx *= -1
        if (p.y < 0 || p.y > height) p.dy *= -1

        context.beginPath()
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        context.fillStyle = p.color
        context.fill()
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute z-0 inset-0 w-full h-full pointer-events-none opacity-30"
    />
  )
}
