import React from 'react'
import { useProductContext } from '../context/ProductContext'
import MainSection from './MainSection'
import { AboutPageContent } from '../utils/constant'

const About = () => {
  const { myName } = useProductContext();
  return (
    <>
    <MainSection title="About " desc={AboutPageContent}/>
    </>
    
  )
}

export default About