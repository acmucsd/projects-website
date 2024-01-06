"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import NavigationBar from '@/src/components/navbar';
import Archive from '@/src/sections/Archive';
// here we will compile all the sections of the website together

const ArchivePage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <Archive />
    </main>
  );
};

export default ArchivePage;