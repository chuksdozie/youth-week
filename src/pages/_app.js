import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
