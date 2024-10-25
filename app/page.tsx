import SearchArea from './_components/SearchArea';
import MoreUserList from './_components/MoreUserList';

export default function Home({ searchParams }: { searchParams: { value: string } }) {
  const value = searchParams.value ?? '';

  return (
    <>
      <SearchArea defaultValue={value} />
      <MoreUserList value={value} />
    </>
  );
}
