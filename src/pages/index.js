import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Amazon 2</title>
      </Head>

      {/** HEADER */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/** BANNER */}
        <Banner />
        {/** PRODUCT FEED */}
        <ProductFeed />
      </main>
    </div>
  );
}
