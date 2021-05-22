import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2</title>
      </Head>

      {/** HEADER */}
      <Header/>
    </div>
  );
}
