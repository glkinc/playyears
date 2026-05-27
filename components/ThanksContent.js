'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function ThanksContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (searchParams.get('from') !== 'form') {
      router.replace('/')
    }
  }, [searchParams, router])

  return (
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
      <div className="content">
        <div className="flex-container flex-col gap-xl items-center">
          <div className="col-lg-8">
            <div className="flex-container flex-col gap-lg">
              <div className="flex-container flex-row gap-md items-center wrap-xs wrap-sm">
                <div className="flex-container flex-col gap-sm">
                  <div className="flex-container flex-col gap-xxs">
                    <h1 className="heading heading-xl">Thanks for Subscribing!</h1>
                  </div>
                  <p className="body-lg">You're on the list. We'll only send the good stuff, new releases, special offers, and updates you won't want to miss.<br />
                    Follow us for play ideas{' '}
                    <a href="https://instagram.com/shopplayyears/" className="text-highlight-secondary" target="_blank" rel="noreferrer">
                      @shopplayyears
                    </a>
                  </p>
                </div>
                <img
                  src="/images/thanks-racoon.svg"
                  alt="Thanks"
                  style={{ maxWidth: '24rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
