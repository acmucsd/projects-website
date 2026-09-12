"use client";
import type { NextPage } from "next";
import "../src/styles/reset.scss";

import NavigationBar from "@/src/components/navbar";
import Hero from "@/src/sections/Hero";
import SkillsGained from "@/src/sections/SkillsGained";
import Timeline from "@/src/sections/Timeline";
import FAQ from "@/src/sections/FAQ";
import Footer from "@/src/components/footer";
// here we will compile all the sections of the website together
const Home: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <SkillsGained />
      <Timeline />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
