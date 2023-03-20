import { graphql, HeadProps, Link, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from '~/styles/pages/404.module.css';
import LayoutCommon from '../components/LayoutCommon';
import Seo from '../components/Seo';

const NotFoundPage = ({ data }: PageProps<Queries.NotFoundPageQuery>) => {
  return (
    <LayoutCommon titleSvg={data.notFound?.publicURL ?? ''}>
      <article
        className={styles.notFoundPage}
        itemScope
        itemType='http://schema.org/Article'
      >
        <GatsbyImage
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
          image={
            data.sleepingCat?.childImageSharp?.gatsbyImageData ??
            ({} as IGatsbyImageData)
          }
          alt='sleeping-cat'
        />
        <section itemProp='articleBody'>
          <Link to='/'>トップへ</Link>
        </section>
      </article>
    </LayoutCommon>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPage {
    notFound: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "404.svg" }
    ) {
      publicURL
    }
    sleepingCat: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "sleeping-cat.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`;

export const Head = ({ location }: HeadProps) => {
  return <Seo title='404' location={location} url='/' />;
};
