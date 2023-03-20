import { useEffect, useState } from 'react';
import * as styles from '~/styles/components/ThumbnailVectorArchive.module.css';

export type Props = {
  img: string;
};

const ThumbnailVectorArchive = ({ img }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(false);
  }, []);

  const className = styles.thumbnailVectorArchive;
  const classNames = isHidden ? [className, 'is-hidden'] : [className];

  return (
    <div className={styles.thumbnailVectorArchiveSpace}>
      <img
        src={img}
        className={classNames.join(' ')}
        alt='thumbnail'
        itemProp='image'
        loading='lazy'
      />
    </div>
  );
};

export default ThumbnailVectorArchive;
