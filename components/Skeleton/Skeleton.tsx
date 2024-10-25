'use client';
import React, { forwardRef } from 'react';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  gap?: number | string;
  borderRadius?: number | string;
  count?: number;
}

const Skeleton = forwardRef<HTMLUListElement | HTMLDivElement, SkeletonProps>(function Skeleton(
  { width, height, borderRadius, gap, count },
  ref,
) {
  const dynamicContainerStyle: React.CSSProperties = {
    gap: gap || '16px',
  };

  const dynamicStyle: React.CSSProperties = {
    width: width || '100%',
    height: height || '30px',
    borderRadius: borderRadius || '0px',
  };

  if (count)
    return (
      <ul ref={ref as React.ForwardedRef<HTMLUListElement>} className={styles.container} style={dynamicContainerStyle}>
        {Array.from({ length: count }, (_, i) => (
          <div key={`skeleton-${i}`} className={styles.skeleton} style={dynamicStyle} />
        ))}
      </ul>
    );

  return <div ref={ref as React.ForwardedRef<HTMLDivElement>} className={styles.skeleton} style={dynamicStyle} />;
});

export default Skeleton;
