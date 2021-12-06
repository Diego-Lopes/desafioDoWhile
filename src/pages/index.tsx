import { Footer } from "@/common/components/Footer";
import { About } from "@/layouts/About";
import { Details } from "@/layouts/Details";
import { Form } from "@/layouts/Form";
import { HomeLayout } from "@/layouts/Home";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
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
