import React from 'react';
import './landing.scss'
import Nav from './containers/Nav';
import LandingRoute from './routes/LandingRoute' 
import Footer from './containers/Footer';

const Landing = (props) => {
  return (
    <>
      <main className={"landing"}>
        <LandingRoute/>
        <Footer />
      </main>
    </>
  )
}
export default Landing;