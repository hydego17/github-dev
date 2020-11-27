import { ChakraProvider } from "@chakra-ui/react";

import Layout from "components/Layout";
import GlobalStyles from "components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
