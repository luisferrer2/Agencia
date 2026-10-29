import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { asset } from '../config/site'
import { useDialog } from '../lib/hooks'

export interface LightboxImage {
  src: string
  width: number
  height: number
  alt: string
  title?: string
  caption?: string
}

export function Lightbox({
  images,
  index,
  onIndex,
  onClose,
}: {
  images: LightboxImage[]
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}) {
  const ref = useDialog(true, onClose)
  const touchX = useRef<number | null>(null)
  const total = images.length
  const current = images[index]

  const go = useCallback(
    (delta: number) => onIndex((index + delta + total) % total),
    [index, total, onIndex],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [go])

  if (!current) return null

  return (
    <div
      className="overlay lightbox"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      <div
        className="lightbox-inner"
        role="dialog"
        aria-modal="true"
        aria-label={current.title ?? 'Imagen ampliada'}
        ref={ref}
      >
        <button className="icon-btn lightbox-close" onClick={onClose} aria-label="Cerrar visor">
          <X size={22} />
        </button>

        {total > 1 && (
          <button className="icon-btn lightbox-nav prev" onClick={() => go(-1)} aria-label="Imagen anterior">
            <ChevronLeft size={26} />
          </button>
        )}

        <figure>
          <img
            key={current.src}
            src={asset(current.src)}
            alt={current.alt}
            width={current.width}
            height={current.height}
          />
          <figcaption>
            <span>
              {current.title && <strong>{current.title}</strong>}
              {current.caption && <small>{current.caption}</small>}
            </span>
            <span className="counter" aria-live="polite">
              {index + 1} / {total}
            </span>
          </figcaption>
        </figure>

        {total > 1 && (
          <button className="icon-btn lightbox-nav next" onClick={() => go(1)} aria-label="Imagen siguiente">
            <ChevronRight size={26} />
          </button>
        )}
      </div>
    </div>
  )
}
