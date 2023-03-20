import * as styles from '~/styles/components/HeaderCommon.module.css';

export type Props = {
  titleSvg: string;
};

const HeaderCommon = ({ titleSvg }: Props) => {
  return (
    <img className={styles.headingCommon} src={titleSvg} alt='heading title' />
  );
};

export default HeaderCommon;
