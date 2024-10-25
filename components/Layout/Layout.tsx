import React from 'react';
import Header from '../Header';

import styles from './Layout.module.scss';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Header
        items={[
          { href: '/', label: '사용자 검색' },
          { href: '/bookmark', label: '북마크 사용자' },
        ]}
      />
      <main className={styles.wrapper}>{children}</main>
    </div>
  );
}
