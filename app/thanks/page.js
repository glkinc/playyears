import { Suspense } from 'react'
import ThanksContent from '@/components/ThanksContent'

export const metadata = {
  title: 'Thank You',
  description: 'Thank you for subscribing to Play Years.',
}

export default function ThanksPage() {
  return (
    <Suspense fallback={null}>
      <ThanksContent />
    </Suspense>
  )
}
