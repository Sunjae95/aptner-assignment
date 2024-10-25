'use server';

import { UserType } from '@/types/user';

interface GetSearchUsersRequestType {
  value: string;
  page?: number;
  per_page?: number;
}

interface GetSearchUsersResponseType {
  total_count: number;
  incomplete_results: boolean;
  items: UserType[];
}

interface ErrorResponseType {
  message: string;
  documentation_url: string;
  status?: string;
}

export const getSearchUsers = async ({ value, page = 1, per_page = 30 }: GetSearchUsersRequestType) => {
  if (!value) return [];

  const queryString = 'q=' + encodeURIComponent(`${value} in:login`);
  const res = await fetch(`https://api.github.com/search/users?${queryString}&page=${page}&per_page=${per_page}`);
  if (res.ok) {
    const data = (await res.json()) as GetSearchUsersResponseType;
    return data.items.map(({ id, login, avatar_url, html_url }) => ({
      id,
      login,
      avatar_url,
      html_url,
    }));
  }
  const error = (await res.json()) as ErrorResponseType;
  throw new Error(`Error${error?.status ?? ''}: ${error.message}`);
};
