import React from 'react';
import Link, { LinkProps } from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

interface HeaderItem extends LinkProps {
  label: string;
}

interface HeaderProps {
  items: HeaderItem[];
}

export default function Header({ items }: HeaderProps) {
  return (
    <header className={styles.container}>
      <Link href={'/'}>
        <Image alt="logo" src={'/assets/logo.png'} width={100} height={42} priority />
      </Link>
      <ul className={styles.wrapper}>
        {items.map(({ label, ...linkProps }) => (
          <li key={`tab-${linkProps.href}`} className={styles.item}>
            <Link {...linkProps} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
