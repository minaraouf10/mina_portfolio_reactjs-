import { portfolioData } from '../data/portfolioData'
import SocialIcon, { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
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
      <p className="footer__copy">
        © {new Date().getFullYear()} {portfolioData.name}
      </p>
    </footer>
  )
}
