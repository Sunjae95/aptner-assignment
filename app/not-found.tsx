import Link from 'next/link';

import styles from './not-fount.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>존재하지 않는 페이지입니다.</h2>
      <Link href="/">
        <button className={styles.button}>홈페이지로 돌아가기</button>
      </Link>
    </div>
  );
}
