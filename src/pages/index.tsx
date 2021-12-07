import { Footer } from "@/common/components/Footer";
import { About } from "@/layouts/About";
import { Details } from "@/layouts/Details";
import { Form } from "@/layouts/Form";
import { HomeLayout } from "@/layouts/Home";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NetFamilia | Programa educação para todos</title>
      </Head>
      <main>
        <HomeLayout />
      </main>
      <section>
        <About />
      </section>
      <section>
        <Details />
      </section>
      <section>
        <Form />
      </section>
      <Footer />
    </>
  );
};

export default Home;
