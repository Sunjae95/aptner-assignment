'use client';
import React, { useCallback, useEffect, useState } from 'react';

import Card, { CardType } from '@/components/Card';
import Skeleton from '@/components/Skeleton';

interface ItemType extends CardType {
  isBookmark: boolean;
}

interface UserListProps {
  data: CardType[];
}

export default function UserList({ data }: UserListProps) {
  const [isRender, setIsRender] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);

  const handleOnChange = useCallback(
    (targetId: number) => () => {
      setItems((data) =>
        data.map(({ isBookmark, ...item }) => {
          if (targetId !== item.id) return { isBookmark, ...item };

          const bookmark = localStorage.getItem('bookmark');
          const bookmarkList = (bookmark ? JSON.parse(bookmark) : []) as CardType[];
          const updateBookmarkList = isBookmark
            ? bookmarkList.filter((bookmark) => targetId !== bookmark.id)
            : bookmarkList.concat(item);

          localStorage.setItem('bookmark', JSON.stringify(updateBookmarkList));

          return { isBookmark: !isBookmark, ...item };
        }),
      );
    },
    [],
  );

  useEffect(() => {
    if (!window) return;
    const bookmark = localStorage.getItem('bookmark');
    const bookmarkList = (bookmark ? JSON.parse(bookmark) : []) as CardType[];

    setItems(
      data.map((card) => ({
        ...card,
        isBookmark: bookmarkList.some(({ id }) => id === card.id),
      })),
    );
    setIsRender(true);
  }, [data]);

  if (!isRender) return <Skeleton count={data.length} height="33px" gap="16px" />;

  return (
    <>
      {items.map((item) => (
        <Card key={item.id} onClick={handleOnChange(item.id)} {...item} />
      ))}
    </>
  );
}
