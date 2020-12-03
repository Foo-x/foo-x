import React from "react"
import { graphql } from "gatsby"
import { SocialIcon } from "react-social-icons"

import LayoutCommon from "../components/layout-common"
import SEO from "../components/seo"

const iconSize = 40

const About = ({ data, location }) => {
  return (
    <LayoutCommon titleSvg={data.file.publicURL} mainClassName="global-main">
      <SEO title="about" location={location} url="/about" />
      <article className="about-page">
        <ul className="about-page-socials">
          <li>
            <SocialIcon
              url="https://github.com/Foo-x"
              style={{ width: iconSize, height: iconSize }}
            />
          </li>
          <li>
            <SocialIcon
              url="/rss.xml"
              network="rss"
              style={{ width: iconSize, height: iconSize }}
            />
          </li>
        </ul>
        <p>
          このサイトは、foo-x（ふー）が学んだ内容をアウトプットする場です。ソフトウェア開発やWeb技術のことを中心に展開していきます。
        </p>
        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは「Googleアナリティクス」を導入しています。このツールではデータを収集するためにCookieを使用しています。データは匿名で収集されており、個人を特定できるものではありません。
        </p>
        <p>
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認いただけると幸いです。詳細は
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            Googleアナリティクスサービス利用規約
          </a>
          や
          <a href="https://policies.google.com/technologies/ads?hl=ja">
            Googleポリシーと規約
          </a>
          をご覧ください。
        </p>
      </article>
    </LayoutCommon>
  )
}

export default About

export const pageQuery = graphql`
  query {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "about.svg" }
    ) {
      publicURL
    }
  }
`
