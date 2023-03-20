import { useEffect, useState } from 'react';
import * as styles from '~/styles/components/ThumbnailVector.module.css';

export type Props = {
  img: string;
};

const ThumbnailVector = ({ img }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(false);
  }, []);

  const className = styles.thumbnailVector;
  const classNames = isHidden ? [className, 'is-hidden'] : [className];

  return (
    <div className={styles.thumbnailVectorSpace}>
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

export default ThumbnailVector;
