'use client';

import React from 'react';

import Card from '@/components/Card';
import useBookmarkList from '@/hooks/useBookmarkList';

export default function BookmarkList() {
  const { bookmarkList, handleOnChange } = useBookmarkList();

  return (
    <ul>
      {bookmarkList.map((item) => (
        <Card key={item.id} onClick={handleOnChange(item, true)} {...item} isBookmark />
      ))}
    </ul>
  );
}
