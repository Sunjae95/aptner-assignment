'use client';
import React from 'react';

import Card, { CardType } from '@/components/Card';
import useBookmarkList from '@/hooks/useBookmarkList';

interface UserListProps {
  data: CardType[];
}

export default function UserList({ data }: UserListProps) {
  const { bookmarkList, handleOnChange } = useBookmarkList();

  return (
    <>
      {data.map((item) => {
        const isBookmark = bookmarkList.some(({ id }) => item.id === id);
        return <Card key={item.id} onClick={handleOnChange(item, isBookmark)} {...item} isBookmark={isBookmark} />;
      })}
    </>
  );
}
