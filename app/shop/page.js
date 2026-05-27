import ShopContent from '@/components/ShopContent'

export const metadata = {
  title: 'Shop',
  description:
    'Browse the Play Years™ First-Year Activity Deck — 50 research-backed play cards for babies 0-12 months.',
  openGraph: {
    title: 'Shop | Play Years',
    description: 'Browse the Play Years™ First-Year Activity Deck.',
    images: ['/images/og-image.png'],
  },
}

export default function ShopPage() {
  return <ShopContent />
}
