import React from 'react';

import styles from './Icon.module.scss';

type IconType = 'search' | 'bookmark' | 'unBookmark' | 'loading';
type IconSize = 24 | 30 | 36;

interface IconProps {
  type: IconType;
  size?: IconSize;
  color?: string;
}

export default function Icon({ type, size = 24, color = 'black' }: IconProps) {
  switch (type) {
    case 'search':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
            fill={color}
          />
        </svg>
      );
    case 'bookmark':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V22.143C20.0001 22.2324 19.9763 22.3202 19.9309 22.3973C19.8855 22.4743 19.8204 22.5378 19.7421 22.5811C19.6639 22.6244 19.5755 22.6459 19.4861 22.6434C19.3968 22.641 19.3097 22.6146 19.234 22.567L12 18.03L4.766 22.566C4.69037 22.6135 4.60339 22.6399 4.5141 22.6424C4.42482 22.6449 4.33649 22.6235 4.2583 22.5803C4.1801 22.5371 4.11491 22.4738 4.06948 22.3969C4.02406 22.32 4.00007 22.2323 4 22.143V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2Z"
            fill={color}
          />
        </svg>
      );
    case 'unBookmark':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V22.143C20.0001 22.2324 19.9763 22.3202 19.9309 22.3973C19.8855 22.4743 19.8204 22.5378 19.7421 22.5811C19.6639 22.6244 19.5755 22.6459 19.4861 22.6434C19.3968 22.641 19.3097 22.6146 19.234 22.567L12 18.03L4.766 22.566C4.69037 22.6135 4.60339 22.6399 4.5141 22.6424C4.42482 22.6449 4.33649 22.6235 4.2583 22.5803C4.1801 22.5371 4.11491 22.4738 4.06948 22.3969C4.02406 22.32 4.00007 22.2323 4 22.143V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2ZM18 4H6V19.432L12 15.671L18 19.432V4Z"
            fill={color}
          />
        </svg>
      );
    case 'loading':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={styles.loading}
        >
          <path
            d="M12 4V2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12H4C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4Z"
            fill={color}
          />
        </svg>
      );
  }
}
