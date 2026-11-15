import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import SocialIcon, { GithubIcon, LinkedinIcon, MailIcon } from '../components/SocialIcon'
import './HeroSection.css'

export default function HeroSection({ onContact }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 30)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section
      id="about"
      className={`hero ${ready ? 'is-ready' : ''}`}
      aria-label="About"
    >
      <div className="hero__rays" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">{portfolioData.name}</h1>
          <p className="hero__tagline">Shipping-ready Flutter apps</p>
          <p className="hero__bio">{portfolioData.bio}</p>

          <div className="hero__actions">
            <button type="button" className="btn btn-primary" onClick={onContact}>
              Start a conversation
              <span aria-hidden="true">✈</span>
            </button>
            <a
              className="btn btn-outline"
              href={portfolioData.cvAsset}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </div>

          <div className="hero__socials">
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

        <div className="hero__media">
          <img
            className="hero__avatar"
            src={portfolioData.avatarAsset}
            alt={`${portfolioData.name} portrait`}
            width="420"
            height="420"
          />
        </div>
      </div>
    </section>
  )
}
