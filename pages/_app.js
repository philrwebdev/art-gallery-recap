import Layout from "@/Components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Layout />
      </SWRConfig>
    </>
  );
}
