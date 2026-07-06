"use client";
import type { NextPage } from "next";
import "../src/styles/reset.scss";

import NavigationBar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import Hero from "@/src/sections/Hero";
import FAQ from "@/src/sections/FAQ";
// here we will compile all the sections of the website together
const Home: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
