import React from 'react'
import './home.scss'
import Whowe from '../../components/Whowe'
import Furniture from '../../components/Furniture'
import KnowWood from '../../components/KnowWood'
import { animateScroll as scroll } from "react-scroll";
import Nav from '../../containers/Nav'
const Home = () => {

    const scrollTo = () => {
      scroll.scrollToTop()
    }

    return (
        <main className="home">
            <Nav/>
            <section className="welcome" id="home"> 
                <div className="welcome-background">
                    <div className="background"></div>
                </div>
                <div className="welcome-speech">
                    <div className="title">
                        WoodLand
                    </div>
                    <div className="sub-title">
                        Overall Solution for housing and furnishing
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dolore explicabo inventore
                        officia quis voluptatem? Alias deleniti ducimus iste magni maxime mollitia non, odit repellendus
                        rerum similique tempore voluptate voluptatem.
                    </p>
                    <button className="btn light">
                        Expore More
                    </button>
                </div>
            </section>
            <section className="whowe" id="whowe">
                <Whowe/>
            </section>
            <section className="furniture" id="furniture">
                <Furniture />
            </section>
            <section className="knowwood" id="knowwood">
                <KnowWood/>
            </section>
            <div className="floating-button card" onClick={scrollTo}>
                <i className="material-icons" >keyboard_arrow_up</i>
            </div>
       </main>
    )
}

export default Home
