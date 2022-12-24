import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mental Flow</title>
        <meta
          name="description"
          content="Use this app to record your flow state!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">
          Use this app to record your flow state!
        </h1>
      </main>
    </>
  );
}
