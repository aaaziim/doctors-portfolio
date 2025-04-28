import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Chamber from '../components/Chamber'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About/>
      <Services/>
      <Chamber/>
    </div>
  )
}

export default Home
