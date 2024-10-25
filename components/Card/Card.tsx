import React from 'react';
import Image from 'next/image';

import Icon from '../Icon';

import styles from './Card.module.scss';

export interface CardType {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface CardProps extends CardType {
  isBookmark: boolean;
  onClick: () => void;
}

export default function Card({ login, avatar_url, html_url, isBookmark, onClick }: CardProps) {
  return (
    <li className={styles.container}>
      <Image src={avatar_url} alt={`${login}-avatar`} width={24} height={24} className={styles.image} />
      <div className={styles.wrapper}>
        <p className={styles.login}>{login}</p>
        <p className={styles.html_url}>{html_url}</p>
      </div>
      <div className={styles.bookmark_wrapper} onClick={onClick}>
        <Icon type={isBookmark ? 'bookmark' : 'unBookmark'} />
      </div>
    </li>
  );
}
