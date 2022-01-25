import React from "react"
import * as styles from "styles/components/work-card.module.css"

const WorkCard = ({ title, tags, description, link }) => {
  return (
    <a
      className={styles.workCard}
      href={link}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <h2 className={styles.workCardTitle}>{title}</h2>
      <ul className={styles.workCardTagList}>
        {tags.map(tag => (
          <li className={styles.workCardTag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className={styles.workCardDescription}>{description}</div>
    </a>
  )
}

export default WorkCard
