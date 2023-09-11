import type { NextPage } from 'next';
import '../src/styles/reset.scss';

import About from '../src/sections/About-Projects';
import Archive from '../src/sections/Archive';
import NavigationBar from '@/src/components/navbar';
import TimerHero from '@/src/sections/Timer';
// here we will compile all the sections of the website together
const Home: NextPage = () => {
  return (
    <main>
      <NavigationBar />
      <TimerHero />
      <Archive/>
    </main>
  );
};

export default Home;

