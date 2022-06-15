import React from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
