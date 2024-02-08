import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Suspense, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Suspense fallback={<></>}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Suspense>
    </>
  );
}
