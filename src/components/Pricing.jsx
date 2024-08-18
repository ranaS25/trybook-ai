import React, { useState } from 'react'
import Header from './Header'


import WithSection from './WithSection'
import SectionHeading from './ui/SectionHeading'
import SectionText from './ui/SectionText'
import { API_KEY_URL, apiPricingData, authenticationData, codeExamples, endpointsData, OVERVIEW, tutorialData } from '../data/constants'

import SectionSubHeading2 from './ui/SectionSubHeading2'
import SectionSubHeading from './ui/SectionSubheading'

import Table from './ui/Table'
import Code from './ui/Code'
import CustomButton from './ui/Button'


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


const Authentication = ({ data }) => {
  
  const [userApi, setUserApi] = useState("");

  const fetchUserApi = () => {
    fetch(API_KEY_URL).then(response => response.json()).then(data =>{ setUserApi(data[0])});
  }

  return (
    <>
      <SectionHeading heading={data.heading} />
      <SectionText content={data.description} />
      <Code code={data.ApiKeyText }/>
      <SectionText content={data.instruction} />
      <CustomButton text={data.buttonCTA} handleClick={fetchUserApi} />
      <div className="mt-4 p-4 border rounded text-text-light dark:text-text border-border-light  dark:border-border break-words">{ data.apiMessage }<strong>{ userApi}</strong></div>
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
      <SectionSubHeading2 heading={'Request Body'} />
      
      <Table tableData={data.tableData} />
      <SectionSubHeading2 heading={'Response'} />
      <Code code={data.response} />
      
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

const CodeExamples = ({data}) => {
  return <>
    <SectionHeading heading={data.heading} />
    <SectionSubHeading heading={data.python.title} />
    <Code code={data.python.code} />

    <SectionSubHeading heading={data.javascript.title} />
    <Code code={data.javascript.code} />
    </>
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
    <div className=" flex flex-col w-full h-fit min-h-dvh bg-background-light dark:bg-backgroundColor">
      <Header />
      <main className='px-8 py-8 w-full min-h-48 h-fit' id="main_content">

        <WithSection WrappedComponent={Overview} /> 
        
        <WithSection data={ authenticationData} WrappedComponent={Authentication} />
        
        <WithSection data={ endpointsData} WrappedComponent={Endpoints} />

        <WithSection WrappedComponent={Tutorial} />

        <WithSection data={codeExamples} WrappedComponent={CodeExamples} /> 

        <WithSection data={apiPricingData} WrappedComponent={ApiPricing} /> 
        

        
        
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