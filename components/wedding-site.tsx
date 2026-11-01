
import { Hero } from '@/components/hero'
import { Schedule } from '@/components/schedule'
import { MusicPlayer } from '@/components/music-player'
import { PetalFall } from '@/components/petal-fall'
import { ScrollBackground } from '@/components/scroll-background'
import { WEDDING } from '@/lib/wedding'

export function WeddingSite() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-transparent">

      {/* Global scroll-linked background */}
      <ScrollBackground />

      {/* Website content */}
      <div className="relative z-10">
        <PetalFall />

        <Hero />

        <Schedule />

        <footer className="border-t border-[#a96949]/20 bg-[#efe3ce]/75 px-6 pb-28 pt-14 text-center sm:pb-14">

          <p
            lang="hi"
            className="font-serif mb-8 text-lg tracking-[0.22em] text-champagne/75"
          >
            ॥ शुभ विवाह ॥
          </p>

          <div className="mx-auto grid max-w-2xl grid-cols-[1fr_auto_1fr] items-start gap-3">

            <div>
              <p className="font-serif text-4xl font-light text-champagne">
                {WEDDING.couple[0]}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-cream/70">
                <span className="block">Daughter of</span>
                {WEDDING.brideParents.map((parent) => (
                  <span className="block" key={parent}>
                    {parent}
                  </span>
                ))}
              </p>
            </div>

            <span className="font-serif pt-1 text-4xl font-light text-champagne/90">
              &amp;
            </span>

            <div>
              <p className="font-serif text-4xl font-light text-champagne">
                {WEDDING.couple[1]}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-cream/70">
                <span className="block">Son of</span>
                {WEDDING.groomParents.map((parent) => (
                  <span className="block" key={parent}>
                    {parent}
                  </span>
                ))}
              </p>
            </div>

          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/50">
            {WEDDING.dateLabel} · {WEDDING.location}
          </p>

          <p className="mt-6 text-xs text-cream/30">
            Made with love, for the ones we love.
          </p>

        </footer>
      </div>

      <MusicPlayer />

    </main>
  )
}
