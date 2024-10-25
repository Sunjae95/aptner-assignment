'use client';
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import useBookmarkList from '@/hooks/useBookmarkList';
import { getSearchUsers } from '@/actions/user';
import Icon from '@/components/Icon';
import Card from '@/components/Card';

import styles from './MoreUserList.module.scss';

interface MoreUserListProps {
  value: string;
}

export default function MoreUserList({ value }: MoreUserListProps) {
  const { bookmarkList, handleOnChange } = useBookmarkList();
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
        <React.Fragment key={`MoreUserList-${i}`}>
          {items.map((item) => {
            const isBookmark = bookmarkList.some(({ id }) => item.id === id);
            return <Card key={item.id} onClick={handleOnChange(item, isBookmark)} {...item} isBookmark={isBookmark} />;
          })}
        </React.Fragment>
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
