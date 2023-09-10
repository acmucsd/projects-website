import type { NextPage } from 'next';
import '../src/styles/reset.scss';

//import About from '../src/sections/About-Projects';
import Archive from '../src/sections/Archive';
// here we will compile all the sections of the website together
const Home: NextPage = () => {
  return (
    <main>
      <Archive/>
    
    </main>
  );
};

export default Home;

