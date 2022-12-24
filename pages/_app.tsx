import type { AppProps } from "next/app";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { RootLayout } from "../components/Layouts";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
