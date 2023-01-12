import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
}
