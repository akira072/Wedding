
'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { GaneshEmblem } from '@/components/indian-ornaments'
import { WEDDING } from '@/lib/wedding'

export function Hero() {
  return (
    <section className="hero-invitation relative flex min-h-svh w-full items-center justify-center bg-transparent">

      {/* Hero content container */}
      <div className="relative w-full min-h-svh">

        {/* Ganesh emblem and blessing */}
        <div className="absolute left-1/2 top-[18%] z-10 flex w-[45%] -translate-x-1/2 flex-col items-center text-center min-[900px]:landscape:top-[8%]">

          <motion.div
            className="mb-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <GaneshEmblem className="h-[18vw] max-h-24 w-[18vw] max-w-24 object-contain min-[900px]:landscape:h-24 min-[900px]:landscape:w-24" />
          </motion.div>

          <motion.p
            lang="hi"
            className="font-serif text-[10px] tracking-[0.14em] text-[#a96949] sm:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            श्री गणेशाय नमः
          </motion.p>

        </div>

        {/* Wedding invitation content */}
        <div className="absolute left-1/2 top-[47%] z-10 flex w-[62%] max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center min-[900px]:landscape:top-[46%] min-[900px]:landscape:w-[44%] min-[900px]:landscape:max-w-2xl">

          <motion.div
            className="flex w-[50vw] max-w-60 flex-col items-center gap-1 sm:w-auto sm:max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            <p className="font-serif text-champagne w-full text-balance text-center text-sm font-light uppercase leading-snug tracking-[0.12em] sm:text-base sm:tracking-[0.16em]">
              Together with our families
            </p>

            <p className="font-serif text-champagne max-w-44 text-balance text-center text-[11px] font-light leading-snug tracking-normal sm:max-w-xs sm:text-xs">
              we cordially invite you to our wedding
            </p>

          </motion.div>

          {/* Couple names */}
          <motion.h1
            className="font-serif mt-1.5 whitespace-nowrap text-[clamp(2rem,8.2vw,2.65rem)] font-bold leading-none text-cream min-[900px]:landscape:mt-2 min-[900px]:landscape:text-[clamp(2.6rem,4.2vw,4.5rem)]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {WEDDING.couple[0]}

            <span className="mx-1.5 inline-block text-champagne/90 sm:mx-3">
              &amp;
            </span>

            {WEDDING.couple[1]}
          </motion.h1>

          {/* Date and location */}
          <motion.div
            className="mt-4 flex flex-col items-center gap-1.5 text-cream/85 sm:mt-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.28em]">
              {WEDDING.dateLabel}
            </p>

            <p className="flex items-center gap-1.5 text-xs text-cream/70 sm:text-sm">
              <MapPin
                className="size-3.5 text-champagne"
                aria-hidden="true"
              />
              {WEDDING.location}
            </p>

          </motion.div>

          {/* Countdown */}
          <motion.div
            className="mt-8 translate-y-3 sm:mt-10 sm:translate-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <Countdown target={WEDDING.date} />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
