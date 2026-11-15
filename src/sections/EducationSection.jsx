import { portfolioData } from '../data/portfolioData'
import SectionHeader from '../components/SectionHeader'
import { useInView } from '../hooks/useInView'
import './EducationSection.css'

export default function EducationSection() {
  const { ref, isVisible } = useInView()

  return (
    <section
      id="education"
      ref={ref}
      className={`section education section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <SectionHeader
          title="Education"
          highlight="Education"
          subtitle="Formal grounding before the production apps."
        />
        {portfolioData.education.map((edu) => (
          <article key={edu.degree} className="education__card">
            <span className="education__bar" aria-hidden="true" />
            <div>
              <p className="education__period">{edu.period}</p>
              <h3>{edu.degree}</h3>
              <p className="education__school">{edu.institution}</p>
              {edu.gpa ? <p className="education__gpa">{edu.gpa}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
