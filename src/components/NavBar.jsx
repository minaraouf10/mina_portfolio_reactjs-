import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import './NavBar.css'

export default function NavBar({ onNavigate }) {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (id) => {
    setMenuOpen(false)
    onNavigate(id)
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <button
            type="button"
            className="navbar__brand"
            onClick={() => handleNav('about')}
          >
            {portfolioData.name}
          </button>

          <nav className="navbar__links" aria-label="Primary">
            {portfolioData.navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="navbar__link"
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="navbar__icon-btn navbar__menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer-backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside className={`drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="drawer__header">
          <p className="drawer__brand">{portfolioData.name}</p>
          <button
            type="button"
            className="navbar__icon-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="drawer__links" aria-label="Mobile">
          {portfolioData.navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="drawer__link"
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
