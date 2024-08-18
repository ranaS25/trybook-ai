import React from 'react'
import Header from './Header'


import WithSection from './WithSection'
import SectionHeading from './ui/SectionHeading'
import SectionText from './ui/SectionText'
import { apiPricingData, endpointsData, OVERVIEW, tutorialData } from '../data/constants'
import CustomButton from './ui/Button'
import SectionSubHeading2 from './ui/SectionSubHeading2'
import SectionSubHeading from './ui/SectionSubheading'

import Table from './ui/Table'


const Overview = () => {
  // var { heading, description } = props;
  const heading = OVERVIEW.heading;
  const description = OVERVIEW.description;
  return (
    <>
      <SectionHeading  heading={heading} />
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

const Endpoints = ({ data }) => {
  console.log("endpoints: ")
  console.log(data.tableData)
  return (
    <>
      <SectionHeading heading={ data.heading} />
      <SectionSubHeading heading={'Generate Book'}/>

      <p className="h-fit"><span className="rounded py-1 px-2 mr-2 bg-accentColor text-backgroundColor">POST</span><span className="rounded py-2 px-4 mb-4  bg-primaryColor text-textColor">/api/generate-book</span></p>
      <SectionSubHeading2 heading={'Request Body'}/>
      <Table tableData={data.tableData} />
      <SectionSubHeading2 heading={'Response'} />
      
      </>
  )
}

const Tutorial = () => {
  // console.log(tutorialData)
  return (
    <>
      <SectionHeading heading={tutorialData.heading} />
      {

        tutorialData.tutorial.map((step) => {
          return <>
            <SectionSubHeading heading={"Step" + step.step + ": " +step.title} />
            <SectionText content={step.description} />
          </>
        })
      }

      
    </>
    
  )

}


const ApiPricing = ({ data }) => {
  // console.log(data)
  return <>
    <SectionHeading heading={data.heading} />
    <SectionText content={data.content} />

    <Table tableData={ data.api_pricing} />

    <SectionSubHeading heading={data.token_estimation.title} />
    <SectionText content={data.token_estimation.description} />

    <SectionSubHeading heading={data.billing.title} />
    <SectionText content={data.billing.description} />
  </>
}


const Pricing = () => {



  return (
    <div className=" flex flex-col w-full h-fit min-h-vh bg-backgroundColor">
      <Header />
      <main className='mx-8 py-8 w-full min-h-48 h-fit' id="main_content">
        <WithSection WrappedComponent={Overview} />
        
        
        <WithSection WrappedComponent={Authentication} />
        
        <WithSection data={ endpointsData} WrappedComponent={Endpoints} />

        <WithSection WrappedComponent={Tutorial} />

        <WithSection data={apiPricingData} WrappedComponent={ApiPricing}/>
        
        
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