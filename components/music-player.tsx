'use client'

import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { BASE_PATH } from '@/lib/base-path'

function Equalizer({ active }: { active: boolean }) {
  return (
    <span className="flex h-4 items-end gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3].map((bar) => (
        <span
          key={bar}
          className="w-0.75 origin-bottom rounded-full bg-white"
          style={{
            height: '100%',
            animation: active
              ? `equalize 0.9s ease-in-out ${bar * 0.15}s infinite`
              : 'none',
            transform: active ? undefined : 'scaleY(0.3)',
          }}
        />
      ))}
    </span>
  )
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55
    const unlockAudio = () => {
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      if (audio.paused) void audio.play().catch(() => undefined)
    }

    void audio.play().catch(() => undefined)
    window.addEventListener('pointerdown', unlockAudio, { once: true })
    window.addEventListener('keydown', unlockAudio, { once: true })

    return () => {
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
    }
  }, [])

  async function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      return
    }

    try {
      audio.volume = 0.55
      await audio.play()
    } catch {
      setPlaying(false)
    }
  }

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <audio
        ref={audioRef}
        src={`${BASE_PATH}/Goldie_Sohel_-_Aaj_Sajeya_(mp3.pm).mp3`}
        autoPlay
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-pressed={playing}
        aria-label={playing ? 'Pause wedding song' : 'Play wedding song'}
        className="diya-glow flex size-14 items-center justify-center gap-1.5 rounded-full bg-champagne text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <span className="flex size-5 items-center justify-center">
          {playing ? (
            <Pause className="size-4" aria-hidden="true" />
          ) : (
            <Play className="size-4 translate-x-px" aria-hidden="true" />
          )}
        </span>
        <Equalizer active={playing} />
      </button>
    </motion.div>
  )
}
