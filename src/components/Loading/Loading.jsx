import styles from './Loading.module.css';
import ClipLoader from 'react-spinners/ClipLoader';
export const Loading = () => {
  return (
    <div className={styles.backDrop}>
      {' '}
      <ClipLoader
        color={'#ffffff'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
