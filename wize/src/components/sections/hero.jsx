import React from 'react'
import profile from "../../assets/images/about/me1.jpg"
import { RiDownloadLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="glitch">
                            <img src={profile} alt="About Me" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="hero-content wow fadeInUp delay-0-2s">
                            <h1>I am a Python Developer, Web Designer, and a Machine Learning Enthusiast living in internet.</h1>
                            <h2>Hi, I'm Gaurav Singh Bisht I'm an aspiring Machine Learning Developer with 2+ years of experience focusing on AI & ML and Web Dev</h2>
                            <div className="hero-btns">
                                <a href="./Resume.pdf" download className="theme-btn">Download CV <i><RiDownloadLine size={16}/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
