import type { Metadata } from 'next';

import '@/styles/reset.scss';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Aptner-assignment',
  description: 'GitHub 유저를 검색하고 해당 유저를 북마크 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header
          items={[
            { href: '/', label: '사용자 검색' },
            { href: '/bookmark', label: '북마크 사용자' },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
