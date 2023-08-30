import type { NextPage } from 'next';
import '../src/styles/reset.scss';

import About from '../src/sections/About-Projects';
// here we will compile all the sections of the website together
const Home: NextPage = () => {
  return (
    <main>
      Welcome to the ACM Projects Website!
      
      <About />
    </main>
  );
};

export default Home;

