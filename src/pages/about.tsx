import { graphql, HeadProps, PageProps } from 'gatsby';
import { SocialIcon } from 'react-social-icons';
import * as styles from '~/styles/pages/about.module.css';
import LayoutCommon from '../components/LayoutCommon';
import Seo from '../components/Seo';

const iconSize = 40;

const About = ({ data }: PageProps<Queries.AboutPageQuery>) => {
  return (
    <LayoutCommon
      titleSvg={data.file?.publicURL ?? ''}
      mainClassName='global-main'
    >
      <article className={styles.aboutPage}>
        <ul className={styles.aboutPageSocials}>
          <li>
            <SocialIcon
              url='https://github.com/Foo-x'
              target='_blank'
              rel='nofollow noopener noreferrer'
              style={{ width: iconSize, height: iconSize }}
            />
          </li>
          <li>
            <SocialIcon
              url='/rss.xml'
              network='rss'
              target='_blank'
              rel='nofollow noopener noreferrer'
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
          <a
            href='https://marketingplatform.google.com/about/analytics/terms/jp/'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            Googleアナリティクスサービス利用規約
          </a>
          や
          <a
            href='https://policies.google.com/technologies/ads?hl=ja'
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            Googleポリシーと規約
          </a>
          をご覧ください。
        </p>
      </article>
    </LayoutCommon>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutPage {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "about.svg" }
    ) {
      publicURL
    }
  }
`;

export const Head = ({ location }: HeadProps) => {
  return <Seo title='about' location={location} url='/about' />;
};
