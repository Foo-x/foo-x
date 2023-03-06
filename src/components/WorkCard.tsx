import * as styles from "~/styles/components/WorkCard.module.css"

export type Props = {
  title: string
  tags: string[]
  description: string
  link: string
}

const WorkCard = ({ title, tags, description, link }: Props) => {
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
      <div>{description}</div>
    </a>
  )
}

export default WorkCard
