import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import Identify from "./components/Identify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AI Typing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Identify>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Identify>
      </Provider>
    </>
  );
}
