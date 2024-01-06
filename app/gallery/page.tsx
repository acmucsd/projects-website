"use client"
import type { NextPage } from 'next';
import '@/src/styles/reset.scss';

import PhotoGallery from '@/src/sections/Photo-Gallery';
import NavigationBar from '@/src/components/navbar';
// here we will compile all the sections of the website together

const GalleryPage: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <PhotoGallery />
    </main>
  );
};

export default GalleryPage;