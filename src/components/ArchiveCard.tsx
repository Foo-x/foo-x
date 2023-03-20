import { Link, navigate } from "gatsby"
import * as styles from "~/styles/components/ArchiveCard.module.css"

type Props = {
  slug: string
  title: string
  thumbnail: JSX.Element
  date: string
  tags: string[]
}

const ArchiveCard = ({ slug, title, thumbnail, date, tags }: Props) => {
  const tagElements = tags.map(tag => {
    return (
      <li key={tag}>
        <Link to={`/archive/?tag=${tag}`} className={styles.tagLink}>
          {tag}
        </Link>
      </li>
    )
  })
  return (
    <article
      className={styles.card}
      onClick={e => {
        if (!e.defaultPrevented) {
          navigate(slug)
        }
      }}
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={slug} className={styles.imageWrapper} itemProp="url">
        {thumbnail}
      </Link>
      <section>
        <h2 className={styles.title} itemProp="headline">
          <Link to={slug} itemProp="url">
            {title}
          </Link>
        </h2>
        <time dateTime={date}>{date.replace(/-/g, ".")}</time>
        <ul className={styles.tags}>{tagElements}</ul>
      </section>
    </article>
  )
}

export default ArchiveCard
