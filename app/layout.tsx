import type { Metadata } from 'next';

import '@/styles/reset.scss';
import QueryClientProvider from '@/components/QueryClientProvider';
import Layout from '@/components/Layout';

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
        <QueryClientProvider>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
