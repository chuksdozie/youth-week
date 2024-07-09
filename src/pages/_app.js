import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Inter,
  // Alegreya_Sans,
  Montserrat_Alternates,
  Aclonica,
  Cairo_Play,
} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const intern = Cairo_Play({
  subsets: ["latin"],
  display: "swap",
  // weight: "400",
});
const interny = Aclonica({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const internx = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={intern.className}>
      <Component {...pageProps} />
    </main>
  );
}
