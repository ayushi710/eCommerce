import React from 'react'
import { useProductContext } from '../context/ProductContext'
import MainSection from './MainSection'

const About = () => {
  const { myName } = useProductContext();
  return (
    <>
    <MainSection title="About " desc="Here explain about this site and uses"/>
    </>
    
  )
}

export default About