'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MailingListModal from './MailingListModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div className="top-bar amazon">
        <div className="content">
          <div className="flex-container flex-row gap-sm items-center justify-center">
            <p><a href="https://amazon.ca/dp/B0H2XFJKGG" target="_blank" rel="noreferrer">Now available on Amazon</a></p>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="content flex-container flex-row justify-between items-center">
          <Link href="/">
            <img src="/images/logo.svg" className="logo" alt="Play Years" />
          </Link>

          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li>
                <Link
                  href="/shop"
                  className={pathname === '/shop' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/approach"
                  className={pathname === '/approach' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={pathname === '/about' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={pathname === '/contact' ? 'active' : ''}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <MailingListModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
