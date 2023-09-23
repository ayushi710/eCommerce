import React from 'react'
import MainSection from './MainSection'
import FeatureProduct from './Product/FeatureProduct'
import { HomePageContent } from '../utils/constant'

const Home = () => {
  return (
    <>
    <MainSection desc={HomePageContent}/>
    <FeatureProduct/>
    </>
    
  )
}

export default Home