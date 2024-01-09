"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import NavigationBar from '@/src/components/navbar';
import Archive from '@/src/sections/Archive';
import Footer from '@/src/components/footer'

// here we will compile all the sections of the website together

const ArchivePage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <Archive />
      <Footer />
    </main>
  );
};

export default ArchivePage;