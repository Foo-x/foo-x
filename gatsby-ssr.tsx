/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import { GatsbySSR } from 'gatsby';

// replace inline css/scss with links
export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
  getHeadComponents,
}) => {
  if (process.env.NODE_ENV !== 'production') return;

  const hc = getHeadComponents();
  hc.forEach((el) => {
    if (el == null || typeof el !== 'object' || !('type' in el)) {
      return;
    }

    if (el.type === 'style' && el.props['data-href']) {
      el.type = 'link';
      el.props.href = el.props['data-href'];
      el.props.rel = 'stylesheet';
      el.props.type = 'text/css';

      delete el.props['data-href'];
      delete el.props.dangerouslySetInnerHTML;
      delete el.props.children;
    }
  });
};
