import { useEffect, useRef, useState } from 'react'
import imgHeavy from '../assets/images/emotional-heavy.jpg'

export default function ParallaxSection() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      // Progress: 0 when section bottom enters viewport, 1 when section top exits
      const totalRange = vh + rect.height
      const scrolled = vh - rect.top
      const p = Math.max(0, Math.min(1, scrolled / totalRange))
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Opens from narrow band into full image, then closes again — ease in/out
  // progress 0   -> 0.5   -> 1
  // expand  0%  -> 100%  -> 0%   (symmetrical arch)
  const arch = 1 - Math.abs(progress - 0.5) * 2   // 0 at edges, 1 in middle
  const heightVh = 20 + arch * 70                  // 20vh (edges) to 90vh (center)
  const parallaxY = (progress - 0.5) * 60          // -30px to +30px image offset
  const opacity = 0.4 + arch * 0.6                 // 0.4 at edges, 1.0 at center

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-slate-50"
      style={{ height: `${heightVh}vh`, transition: 'height 0.1s linear' }}
    >
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${parallaxY}px)`, opacity }}
      >
        <img
          src={imgHeavy}
          alt="Caregiving can be overwhelming"
          className="w-full h-full object-cover"
        />
        {/* Caption gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent pointer-events-none" />
      </div>

      {/* Caption overlay */}
      <div
        className="relative z-10 flex items-end justify-center h-full pb-8 md:pb-14 px-4"
        style={{ opacity: arch }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight drop-shadow-lg max-w-5xl">
          Daily Care Can Feel Overwhelming Without The Right Support
        </h2>
      </div>
    </section>
  )
}
