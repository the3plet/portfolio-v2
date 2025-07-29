import About from '@/components/About'
import Experience from '@/components/Experience'
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
   <Stack/>
   <Projects/>
   <About/>
   </div>
  )
}

export default Home