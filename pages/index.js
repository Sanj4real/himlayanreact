import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/layouts/Layout";

export default function index() {
  return (
    <>
      <Head>
        <title>Himalayan Circuit</title>
        <meta name="description" content="Himalayan Circuit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
