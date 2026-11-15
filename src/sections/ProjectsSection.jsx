import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { portfolioData } from '../data/portfolioData'
import SectionHeader from '../components/SectionHeader'
import { useInView } from '../hooks/useInView'
import './ProjectsSection.css'

function ProjectLightbox({ images, title, index, onClose, onChange }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange(1)
      if (e.key === 'ArrowLeft') onChange(-1)
    }
    window.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onChange])

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} gallery`}>
      <button
        type="button"
        className="lightbox__backdrop"
        aria-label="Close lightbox"
        onClick={onClose}
      />
      <div className="lightbox__content">
        <img src={images[index]} alt={`${title} screenshot ${index + 1}`} />
      </div>
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      {images.length > 1 ? (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => onChange(-1)}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => onChange(1)}
            aria-label="Next"
          >
            ›
          </button>
        </>
      ) : null}
    </div>,
    document.body,
  )
}

function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (images.length <= 1 || hovered || lightbox !== null) return undefined
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length, hovered, lightbox])

  const go = (dir) => {
    setIndex((prev) => (prev + dir + images.length) % images.length)
  }

  const changeLightbox = (dir) => {
    setLightbox((prev) => (prev + dir + images.length) % images.length)
  }

  return (
    <>
      <div
        className={`project-gallery ${hovered ? 'is-hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          type="button"
          className="project-gallery__stage"
          onClick={() => setLightbox(index)}
          aria-label={`Open ${title} screenshots`}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className={i === index ? 'is-active' : ''}
            />
          ))}
        </button>

        {images.length > 1 ? (
          <>
            <div className="project-gallery__dots" aria-hidden="true">
              {images.map((src, i) => (
                <span
                  key={src}
                  className={`project-gallery__dot ${i === index ? 'is-active' : ''}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="project-gallery__arrow project-gallery__arrow--prev"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="project-gallery__arrow project-gallery__arrow--next"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {lightbox !== null
        ? (
            <ProjectLightbox
              images={images}
              title={title}
              index={lightbox}
              onClose={() => setLightbox(null)}
              onChange={changeLightbox}
            />
          )
        : null}
    </>
  )
}

function ProjectRow({ project, reverse }) {
  return (
    <article className={`project-row ${reverse ? 'project-row--reverse' : ''}`}>
      <ProjectGallery images={project.imageAssets} title={project.title} />
      <div className="project-row__details">
        {project.role ? <p className="project-row__role">{project.role}</p> : null}
        <h3>{project.title}</h3>
        <p className="project-row__desc">{project.description}</p>
        <div className="project-row__tech">
          {project.tech.map((tag) => (
            <span key={tag} className="chip chip-accent">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section
      id="work"
      ref={ref}
      className={`section projects section-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <SectionHeader
          title="A selection of recent projects"
          highlight="recent projects"
          subtitle="Apps and product surfaces I built for clients and day-to-day ops."
        />
        <div className="projects__list">
          {portfolioData.projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
