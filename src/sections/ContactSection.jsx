import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import SocialIcon, { GithubIcon, LinkedinIcon, MailIcon } from '../components/SocialIcon'
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
          <div className="contact__glow" aria-hidden="true" />

          <div className="contact__grid">
            <div className="contact__intro">
              <p className="contact__eyebrow">Contact</p>
              <h2 className="contact__title">
                Let&apos;s get <span className="gradient">in touch</span>
              </h2>
              <p className="contact__lead">
                Open to full-time roles, freelance builds, and collaborations. If you
                have a product in mind — or just want to compare notes on Flutter —
                write me.
              </p>

              <div className="contact__socials">
                <SocialIcon href={portfolioData.githubUrl} label="GitHub">
                  <GithubIcon />
                </SocialIcon>
                <SocialIcon href={portfolioData.linkedinUrl} label="LinkedIn">
                  <LinkedinIcon />
                </SocialIcon>
                <SocialIcon href={`mailto:${portfolioData.email}`} label="Email">
                  <MailIcon />
                </SocialIcon>
              </div>
            </div>

            <div className="contact__actions">
              <div className="contact__email-card">
                <p className="contact__label">Email</p>
                <p className="contact__address">{portfolioData.email}</p>

                <div className="contact__buttons">
                  <button
                    type="button"
                    className={`contact__copy-btn ${copied ? 'is-copied' : ''}`}
                    onClick={copyEmail}
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="9" y="9" width="11" height="11" rx="2" />
                          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                        </svg>
                        Copy email
                      </>
                    )}
                  </button>

                  <a
                    className="btn btn-primary contact__send"
                    href={`mailto:${portfolioData.email}?subject=Hello%20from%20your%20portfolio`}
                  >
                    Send an email
                    <span aria-hidden="true">✈</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
