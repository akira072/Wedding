
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { BASE_PATH } from '@/lib/base-path'

export function ScrollBackground() {
  const { scrollYProgress } = useScroll()

  // Gradually reveal the alternate background across the page.
  const alternateOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0.15, 0.5, 0.85, 1]
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Original background */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(min-width: 900px) and (orientation: landscape)"
            srcSet={`${BASE_PATH}/indian-wedding-hero-desktop-botanical.png`}
          />
          <img
            src={`${BASE_PATH}/indian-wedding-hero-botanical.png`}
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      {/* Alternate background */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: alternateOpacity }}
      >
        <picture>
          <source
            media="(min-width: 900px) and (orientation: landscape)"
            srcSet={`${BASE_PATH}/indian-wedding-hero-desktop.png`}
          />
          <img
            src={`${BASE_PATH}/indian-wedding-hero-background.png`}
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
      </motion.div>
    </div>
  )
}
