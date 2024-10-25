'use client';
import { useCallback, useEffect, useState } from 'react';

import { CardType } from '@/components/Card';

const useBookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState<CardType[]>([]);

  const handleOnChange = useCallback(
    (item: CardType, status: boolean) => () => {
      setBookmarkList((bookmarkList) => {
        const newBookmarks = status ? bookmarkList.filter(({ id }) => item.id !== id) : bookmarkList.concat(item);
        localStorage.setItem('bookmark', JSON.stringify(newBookmarks));

        return newBookmarks;
      });
    },
    [],
  );

  useEffect(() => {
    if (!window) return;
    const savedBookmark = localStorage.getItem('bookmark');
    setBookmarkList(savedBookmark ? JSON.parse(savedBookmark) : []);
  }, []);

  return { bookmarkList, handleOnChange };
};

export default useBookmarkList;
