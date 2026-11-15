export default function SectionHeader({ title, subtitle, highlight }) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return title
    const [before, ...rest] = title.split(highlight)
    return (
      <>
        {before}
        <span className="gradient">{highlight}</span>
        {rest.join(highlight)}
      </>
    )
  }

  return (
    <header className="section-header">
      <h2 className="section-title">{renderTitle()}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  )
}
