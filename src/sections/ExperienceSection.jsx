import { portfolioData } from '../data/portfolioData'
import SectionHeader from '../components/SectionHeader'
import { useInView } from '../hooks/useInView'
import './ExperienceSection.css'

export default function ExperienceSection() {
  const { ref, isVisible } = useInView()

  return (
    <section
      id="experience"
      ref={ref}
      className={`section experience section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <SectionHeader
          title="My work experience"
          highlight="work experience"
          subtitle="Where I have been building, shipping, and learning."
        />
        <div className="experience__list">
          {portfolioData.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="experience__item">
              <div className="experience__meta">
                <span className="experience__period">{item.period}</span>
                <p className="experience__location">{item.location}</p>
              </div>
              <div className="experience__body">
                <h3>{item.company}</h3>
                <p className="experience__company">{item.role}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
