import SearchArea from './_components/SearchArea';
import MoreUserList from './_components/MoreUserList';

import styles from './page.module.scss';

export default function Home({ searchParams }: { searchParams: { value: string } }) {
  const value = searchParams.value ?? '';

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <SearchArea defaultValue={value} />
        <MoreUserList value={value} />
      </div>
    </main>
  );
}
