import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
   <div className='bg-black w-screen h-screen '>
   <Navbar/>
   <Hero/>
   <Experience/>
   <Projects/>
   <Stack/>
   <About/>
   <Footer/>
   </div>
  )
}

export default Home