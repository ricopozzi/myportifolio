import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { Tecs } from "../components/Tecs";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Tecs />
      <Projects />
      <Certifications />
    </>
  );
};

export default Home;
