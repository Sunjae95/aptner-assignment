'use client';
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import Icon from '@/components/Icon';
import { getSearchUsers } from '@/actions/user';

import UserList from '../UserList';
import styles from './MoreUserList.module.scss';

interface MoreUserListProps {
  value: string;
}

export default function MoreUserList({ value }: MoreUserListProps) {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: [value],
    queryFn: ({ pageParam }) => getSearchUsers({ value, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => (lastPage.length < 30 ? undefined : lastPageParam + 1),
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || isFetching || !hasNextPage) return;

    const targetEl = ref.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchNextPage();
    });

    observer.observe(targetEl);

    return () => observer.unobserve(targetEl);
  }, [isFetching, hasNextPage, fetchNextPage]);

  return (
    <ul>
      {data?.pages.map((items, i) => (
        <UserList key={`moreList-${i}`} data={items} />
      ))}
      {hasNextPage && <div ref={ref} className={styles.moreContainer} />}
      {isFetching && (
        <div className={styles.loading_wrapper}>
          <Icon type="loading" color="#00a8ff" />
        </div>
      )}
    </ul>
  );
}
