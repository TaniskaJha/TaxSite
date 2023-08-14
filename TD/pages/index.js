import {  Navbar } from '../components';
import { About,  Hero, } from '../sections';

const Home = () => (
  <div className="bg-primary-black gradient-pink-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      </div>
    
  </div>
);

export default Home;
