import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CreateLinkForm = dynamic(() => import("../components/create-link"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pendekin Link | Solusi Cepat Memangkas Tautan Panjang!</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-950 text-white">
        <Suspense>
          <CreateLinkForm />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
