import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={'/'}>사용자 검색</Link>
        </li>
        <li>
          <Link href={'?tab=bookmark'}>북마크 사용자</Link>
        </li>
      </ul>
      <input placeholder="사용자를 검색해주세요." />
      <button>검색</button>
      <ol>
        <li>유저1</li>
        <li>유저2</li>
        <li>유저3</li>
      </ol>
    </main>
  );
}
