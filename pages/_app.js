import ThemeProvider from "providers/ThemeProvider";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "components/Layout";
import GlobalStyles from "components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <ChakraProvider>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
