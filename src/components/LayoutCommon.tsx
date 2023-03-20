import { PropsWithChildren, useContext } from 'react';
import { IsMenuActiveStateContext } from '~/contexts/IsMenuActiveContext';
import * as styles from '~/styles/components/LayoutCommon.module.css';
import HeaderCommon from './HeaderCommon';
import Nav from './Nav';

export type Props = PropsWithChildren<{
  titleSvg: string;
  mainClassName?: string;
}>;

const LayoutCommon = ({ children, titleSvg, mainClassName }: Props) => {
  const isMenuActive = useContext(IsMenuActiveStateContext);
  return (
    <div className='global-wrapper'>
      <header className={styles.globalHeaderCommon}>
        <HeaderCommon titleSvg={titleSvg} />
      </header>
      <Nav isHidden={false} className='global-nav-wrapper' />
      <main
        className={mainClassName}
        ref={(node) =>
          node &&
          (isMenuActive
            ? node.setAttribute('inert', '')
            : node.removeAttribute('inert'))
        }
      >
        {children}
      </main>
    </div>
  );
};

export default LayoutCommon;
