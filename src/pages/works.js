import { graphql } from "gatsby"
import React from "react"
import styles from "styles/pages/works.module.css"
import LayoutCommon from "../components/layout-common"
import SEO from "../components/seo"
import WorkCard from "../components/work-card"

const items = [
  {
    title: "あにいも名場面集",
    tags: ["TypeScript", "React", "Gatsby"],
    description: "兄妹 YouTuber の名場面集",
    link: "https://ani-imo-scenes.com",
  },
  {
    title: "コーディングの指針",
    tags: ["Vuepress", "プログラミング"],
    description: "良いコードを書くための指針",
    link: "https://foo-x.github.io/coding-guidelines/",
  },
  {
    title: "開発ドキュメントテンプレート",
    tags: ["ドキュメント"],
    description: "開発時に使用するドキュメントのテンプレート集",
    link: "https://github.com/Foo-x/documentation_templates",
  },
  {
    title: "ビジネス・フレームワーク",
    tags: ["VuePress", "業務"],
    description: "業務でよく使われるフレームワーク集",
    link: "https://foo-x.github.io/business-frameworks/",
  },
  {
    title: "YouTube Timestamp Comments",
    tags: ["TypeScript", "React", "Chrome Extensions"],
    description: "YouTube の時間指定コメントを表示するChrome拡張機能",
    link:
      "https://chrome.google.com/webstore/detail/youtube-timestamp-comment/khngjoedfeicfbjlcfmiigbokbnlibei",
  },
  {
    title: "nacc | Nim AtCoder CLI",
    tags: ["Nim", "競プロ"],
    description: "Nim製の AtCoder コマンドラインツール",
    link: "https://github.com/Foo-x/nacc",
  },
  {
    title: "contestlib-nim",
    tags: ["Nim", "競プロ"],
    description: "Nim用の競プロライブラリ",
    link: "https://github.com/Foo-x/contestlib-nim",
  },
  {
    title: "color-system",
    tags: ["SCSS", "デザイン"],
    description: "表色系ライブラリ",
    link: "https://github.com/Foo-x/color-system",
  },
  {
    title: "dotfiles",
    tags: ["Linux"],
    description: "設定ファイル集",
    link: "https://github.com/Foo-x/dotfiles",
  },
  {
    title: "TIL | Today I Learned",
    tags: ["Tips"],
    description: "記事にするほどでもないTips集",
    link: "https://github.com/Foo-x/til",
  },
]

const Works = ({ data, location }) => {
  return (
    <LayoutCommon
      titleSvg={data.file.publicURL}
      mainClassName="global-main-works"
    >
      <SEO title="works" location={location} url="/works" />
      <section className={styles.worksPage}>
        <ul className={styles.worksItemList}>
          {items.map(item => (
            <li className="works-item" key={item.title}>
              <WorkCard {...item} />
            </li>
          ))}
        </ul>
      </section>
    </LayoutCommon>
  )
}

export default Works

export const pageQuery = graphql`
  query {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "works.svg" }
    ) {
      publicURL
    }
  }
`
