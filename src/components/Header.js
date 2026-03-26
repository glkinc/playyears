import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import MailingListModal from "../components/MailingListModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="top-bar kickstarter">
        <div className="content">
          <div className="flex-container flex-row gap-sm items-center justify-center">
            <p>
              Coming soon to
            </p>
            <img
              src={process.env.PUBLIC_URL + "/images/kickstarter-logo.svg"}
              alt="Kickstarter"
            />
          </div>
        </div>
      </div>

      <header className="header">
        <div className="content flex-container flex-row justify-between items-center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.svg"}
              className="logo"
              alt="Play Years"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav */}
          <nav className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/shop" onClick={closeMenu}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" onClick={closeMenu}>
                  Our Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                <button className="btn" onClick={openModal}>
                  Join Mailing List
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <MailingListModal open={showModal} onClose={closeModal} />
    </>
  );
}