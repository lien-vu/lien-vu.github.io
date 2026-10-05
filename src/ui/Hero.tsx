import { useState } from 'react'

type HeroProps = {
  name: string
  title: string
  subtitle?: string
  imageUrl?: string
}

export default function Hero({ name, title, subtitle, imageUrl }: HeroProps) {
  const baseUrl = import.meta.env.BASE_URL
  const defaultImg = `${baseUrl}profile-416.jpg`
  const [imgSrc, setImgSrc] = useState<string>(imageUrl ?? defaultImg)
  return (
    <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-16 -right-24 w-72 h-72 rounded-full bg-accent-200 blur-3xl opacity-40" />
      </div>
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">
          {name}
        </h1>
        <p className="mt-3 text-brand-700 font-medium leading-relaxed">{title}</p>
        {subtitle && <p className="mt-2 text-ink-600">{subtitle}</p>}
      </div>
      <div className="justify-self-center">
        <picture>
          <source srcSet={`${baseUrl}profile-416.webp`} type="image/webp" />
          <img
            src={imgSrc}
            alt={`${name} headshot`}
            className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover object-[50%_20%] ring-4 ring-brand-100 shadow-lg shadow-brand-100/50 transition-transform duration-300 hover:scale-[1.02]"
            onError={() => setImgSrc(defaultImg)}
            width={208}
            height={208}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  )
}


