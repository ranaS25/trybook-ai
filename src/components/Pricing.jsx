import React from 'react'
import Header from './Header'


import WithSection from './WithSection'
import SectionHeading from './ui/SectionHeading'
import SectionText from './ui/SectionText'
import { OVERVIEW } from '../data/constants'
import CustomButton from './ui/Button'


const Overview = () => {
  // var { heading, description } = props;
  const heading = OVERVIEW.heading;
  const description = OVERVIEW.description;
  return (
    <>
      <SectionHeading heading={heading} />
      <SectionText content={description} />
    </>
  )
}


const Authentication = () => {

  return (
    <>
      <SectionHeading heading={'Authentication'} />
      <SectionText content={"To use the API, you need to include your API key in the header of each request:"} />
      <SectionText content={"To generate an API key, use the button below:"} />
      <CustomButton text={ "Generate API Key"}/>
    </>
  )
}

const Tutorial = () => {
  return (
    <SectionHeading heading={"Tutorial"} />
    
  )

}


const Pricing = () => {



  return (
    <div className=" flex flex-col w-full h-fit min-h-vh">
      <Header />
      <main className='mx-8 py-8 w-full min-h-48 h-fit' id="main_content">
        <WithSection WrappedComponent={Overview} />
        
        <WithSection WrappedComponent={Tutorial} />
        
        <WithSection WrappedComponent={Authentication}/>
        
      </main>
    </div>
  )
}

{
/* 
Header
  - App Name
  - Navbar
Overview
Authentication
Endpoints
Tutorial
Code Examples
Api Pricing


*/

}

export default Pricing