import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
// import useAccount from "../hooks/useAccount";
// import { withRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // const { account } = useAccount();

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
