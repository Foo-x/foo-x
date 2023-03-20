import { graphql, useStaticQuery } from 'gatsby';
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import * as styles from '~/styles/components/ShareFooter.module.css';

export type Props = {
  url: string;
  title: string;
};

const ShareFooter = ({ url, title }: Props) => {
  const { site } = useStaticQuery<Queries.ShareFooterQuery>(
    graphql`
      query ShareFooter {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const pageTitle = `${title} | ${site?.siteMetadata?.title ?? ''}`;
  const size = 32;

  return (
    <footer className={styles.shareFooter}>
      <TwitterShareButton url={url} title={pageTitle}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={pageTitle}>
        <FacebookIcon size={size} />
      </FacebookShareButton>
      <HatenaShareButton url={url} title={pageTitle}>
        <HatenaIcon size={size} />
      </HatenaShareButton>
    </footer>
  );
};

export default ShareFooter;
