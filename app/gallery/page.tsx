"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import PhotoGallery from '@/src/sections/Photo-Gallery';
import NavigationBar from '@/src/components/navbar';
import Footer from '@/src/components/footer'
// here we will compile all the sections of the website together

const GalleryPage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <PhotoGallery />
      <Footer />
    </main>
  );
};

export default GalleryPage;