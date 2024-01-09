"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import About from '@/src/sections/About-Projects';
import NavigationBar from '@/src/components/navbar';
import Footer from '@/src/components/footer'
// here we will compile all the sections of the website together

const AboutPage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <About />
      <Footer />
    </main>
  );
};

export default AboutPage;