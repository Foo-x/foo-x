import React from "react"
import { graphql } from "gatsby"

import LayoutCommon from "../components/layout-common"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  return (
    <LayoutCommon titleSvg={data.file.publicURL} mainClassName="global-main">
      <SEO title="about" location={location} />
      <article
        className="about-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <h2 itemProp="headline">アクセス解析ツールについて</h2>
        <section itemProp="articleBody">
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
              Googleアナリティクスサービス利用規約
            </a>
            のページや
            <a href="https://policies.google.com/technologies/ads?hl=ja">
              Googleポリシーと規約
            </a>
            ページをご覧ください。
          </p>
        </section>
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
