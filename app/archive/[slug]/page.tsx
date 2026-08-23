"use client"
import '@/src/styles/reset.scss';

import NavigationBar from '@/src/components/navbar';
import ProjectDetail from '@/src/sections/ProjectDetail';
import Footer from '@/src/components/footer';

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      <NavigationBar />
      <ProjectDetail slug={params.slug} />
      <Footer />
    </main>
  );
};

export default ProjectPage;
