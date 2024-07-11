import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeScreen from "@/sub-screens/home";
import EventLineUp from "@/components/EventLineUp";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/register");
  }, [router]);
  return (
    <>
      {/* <HomeScreen /> */}
      <div />
    </>
  );
}
