'use client';

import React, { useCallback, useEffect, useState } from 'react';

import Card, { CardType } from '@/components/Card';

export default function BookmarkList() {
  const [items, setItems] = useState<CardType[]>([]);

  const handleOnRemove = useCallback(
    (targetId: number) => () => {
      setItems((data) => {
        const newData = data.filter(({ id }) => targetId !== id);
        localStorage.setItem('bookmark', JSON.stringify(newData));

        return newData;
      });
    },
    [],
  );

  useEffect(() => {
    if (!window) return;
    const bookmark = localStorage.getItem('bookmark');
    const bookmarkList = (bookmark ? JSON.parse(bookmark) : []) as CardType[];

    setItems(bookmarkList);
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <Card key={item.id} onClick={handleOnRemove(item.id)} {...item} isBookmark />
      ))}
    </ul>
  );
}
