import { portfolioData } from '../data/portfolioData'
import SectionHeader from '../components/SectionHeader'
import { useInView } from '../hooks/useInView'
import './SkillsSection.css'

export default function SkillsSection() {
  const { ref, isVisible } = useInView()
  const allSkills = portfolioData.skillCategories.flatMap((c) => c.skills)

  return (
    <section
      id="skills"
      ref={ref}
      className={`section skills section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <SectionHeader
          title="Tools I ship with"
          highlight="ship with"
          subtitle="Technologies I reach for when an app needs to ship and stay maintainable."
        />

        <div className="skills__marquee" aria-hidden="true">
          <div className="skills__track">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="skills__pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills__grid">
          {portfolioData.skillCategories.map((category) => (
            <article key={category.category} className="skills__card">
              <h3>{category.category}</h3>
              <div className="skills__chips">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
