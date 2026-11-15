import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import SectionHeader from '../components/SectionHeader'
import { useInView } from '../hooks/useInView'
import './ContactSection.css'

export default function ContactSection() {
  const { ref, isVisible } = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`section contact section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <div className="contact__panel">
          <SectionHeader
            title="Let's get in touch"
            highlight="in touch"
            subtitle="Open to full-time roles, freelance builds, and collaborations."
          />
          <p className="contact__lead">
            If you have a product in mind — or just want to compare notes on Flutter —
            write me.
          </p>

          <button type="button" className="contact__email" onClick={copyEmail}>
            <span>{portfolioData.email}</span>
            <span className="contact__copy-icon" aria-hidden="true">
              {copied ? '✓' : '⧉'}
            </span>
            <span className="sr-only">{copied ? 'Email copied' : 'Copy email'}</span>
          </button>

          <a
            className="btn btn-primary"
            href={`mailto:${portfolioData.email}?subject=Hello%20from%20your%20portfolio`}
          >
            Send an email
            <span aria-hidden="true">✈</span>
          </a>
        </div>
      </div>
    </section>
  )
}
