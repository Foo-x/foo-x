// custom typefaces
import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/700.css';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
// normalize CSS across browsers
import './src/normalize.css';
// custom CSS styles
import './src/style.css';

// Highlighting for code blocks
import 'prismjs/themes/prism.css';

import { GatsbyBrowser } from 'gatsby';
import 'wicg-inert';
import IsMenuActiveContextProvider from '~/contexts/IsMenuActiveContext';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  return <IsMenuActiveContextProvider>{element}</IsMenuActiveContextProvider>;
};
