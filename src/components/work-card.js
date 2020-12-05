import React from "react"

const WorkCard = ({ title, tags, description, link }) => {
  return (
    <a
      className="work-card"
      href={link}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <h2 className="work-card-title">{title}</h2>
      <ul className="work-card-tag-list">
        {tags.map(tag => (
          <li className="work-card-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="work-card-description">{description}</div>
    </a>
  )
}

export default WorkCard
