import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
