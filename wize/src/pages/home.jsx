import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'
import CallToAction from '../components/sections/callToAction'

const Home = () => {
  return (
    <>
        <Hero/>
        <Portfolio/>
       
        <CallToAction/>
        <ScrollRestoration/>
    </>
  )
}

export default Home