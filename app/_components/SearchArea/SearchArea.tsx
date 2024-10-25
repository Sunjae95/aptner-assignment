'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

import Icon from '@/components/Icon';

import styles from './SearchArea.module.scss';

interface SearchAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchArea({ ...props }: SearchAreaProps) {
  const { replace } = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const handleOnSearch = () => replace(`?value=${ref.current?.value}`);

  return (
    <div className={styles.container}>
      <Icon type="search" />
      <input
        ref={ref}
        className={styles.input}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleOnSearch();
        }}
        {...props}
      />
      <button onClick={handleOnSearch} className={styles.button}>
        검색
      </button>
    </div>
  );
}
