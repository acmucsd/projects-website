"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import WIP from "@/src/sections/WIP-Page";
import NavigationBar from '@/src/components/navbar';
import Footer from '@/src/components/footer'
// here we will compile all the sections of the website together

const EventsPage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <WIP />
      <Footer />
    </main>
  );
};

export default EventsPage;