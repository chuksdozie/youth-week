import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Inter,
  // Alegreya_Sans,
  Montserrat_Alternates,
  Aclonica,
  Cairo_Play,
} from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageLoader from "@/layout/PageLoader";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    // Set loading to false initially
    setLoading(false);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, []);
  return (
    <main className={intern.className}>
      <DefaultSeo {...SEO} />
      {loading ? <PageLoader /> : <Component {...pageProps} />}
    </main>
  );
}
