"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import About from '@/src/sections/About-Projects';
import NavigationBar from '@/src/components/navbar';
// here we will compile all the sections of the website together

const AboutPage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <About />
    </main>
  );
};

export default AboutPage;