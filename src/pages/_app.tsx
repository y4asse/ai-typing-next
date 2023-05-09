import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import Identify from "./components/Identify";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../libs/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
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
