import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'
import CallToAction from '../components/sections/callToAction'
import Services from '../components/sections/services'

const Home = () => {
  return (
    <>
        <Hero/>
        <Services/>
        <Portfolio/>
       
        <CallToAction/>
        <ScrollRestoration/>
    </>
  )
}

export default Home