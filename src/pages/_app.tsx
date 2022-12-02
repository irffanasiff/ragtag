import theme from '@/config/chakra.config';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import Layout from 'src/components/HOC/Layout.HOC';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
