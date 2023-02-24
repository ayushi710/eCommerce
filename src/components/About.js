import React from 'react'
import { useProductContext } from '../context/ProductContext'
import MainSection from './MainSection'

const About = () => {
  const { myName } = useProductContext();
  return (
    <>
    {myName}
    <MainSection title="About "/>
    </>
    
  )
}

export default About