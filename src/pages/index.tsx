import { HomeLayout } from "@/layouts/Home";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <HomeLayout />
      </main>
    </>
  );
};

export default Home;
