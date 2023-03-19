import { Link } from "gatsby"
import * as styles from "~/styles/components/ArchiveCard.module.css"

type Props = {
  slug: string
  title: string
  thumbnail: JSX.Element
  date: string
  tags: JSX.Element[]
}

const ArchiveCard = ({ slug, title, thumbnail, date, tags }: Props) => {
  return (
    <article
      className={styles.searchResultItem}
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={slug} itemProp="url">
        <div className={styles.searchResultImageWrapper}>{thumbnail}</div>
        <section>
          <h2 className={styles.searchResultItemTitle} itemProp="headline">
            {title}
          </h2>
          <time dateTime={date}>{date.replace(/-/g, ".")}</time>
          <ul className={styles.searchResultTagList}>{tags}</ul>
        </section>
      </Link>
    </article>
  )
}

export default ArchiveCard
