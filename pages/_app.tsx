import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { RootLayout } from "../components/Layouts";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </RootLayout>
  );
}
