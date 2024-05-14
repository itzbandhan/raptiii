import React from 'react'
import Stats from '../components/Stats'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <hr />
      <Hero />
      <hr />
      <Featured />
      <hr />
      <Stats />
      <hr />
      <Cta />
      <hr />
      <Testimonial />
      <hr />
    </div>
  );
}

export default Home