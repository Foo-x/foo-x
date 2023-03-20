import { graphql, HeadProps, PageProps } from 'gatsby';
import * as styles from '~/styles/pages/archive.module.css';
import LayoutCommon from '../components/LayoutCommon';
import Search from '../components/Search';
import Seo from '../components/Seo';

const Archive = ({ data, location }: PageProps<Queries.ArchivePageQuery>) => {
  const query = new URLSearchParams(location.search);
  return (
    <LayoutCommon
      titleSvg={data.file?.publicURL ?? ''}
      mainClassName='global-main-archive'
    >
      <section className={styles.archivePage}>
        <Search query={query} />
      </section>
    </LayoutCommon>
  );
};

export default Archive;

export const pageQuery = graphql`
  query ArchivePage {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "archive.svg" }
    ) {
      publicURL
    }
  }
`;

export const Head = ({ location }: HeadProps) => {
  return <Seo title='archive' location={location} url='/archive' />;
};
