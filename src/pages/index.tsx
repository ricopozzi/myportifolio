import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { Tecs } from "../components/Tecs";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";
import { Avatar } from "../components/Avatar";
import { Contact } from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pozzi</title>
        <link rel='icon' href='/topicon.svg' />
      </Head>
      <Header />
      <Main />
      <Tecs />
      <Projects />
      <Certifications />
      <Contact />
      <Avatar />
    </>
  );
};

export default Home;
