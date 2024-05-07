import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'LionArt - custom high-quality phone cases',
  description = 'Create custom high-quality phone cases in seconds',
  image = '/thumblion.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@project.pro',
    },
    icons,
    metadataBase: new URL("https://lion-mkaidev.vercel.app/")
  }
}
