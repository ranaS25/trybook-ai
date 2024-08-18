import React from 'react'
import Header from './Header'


import {  apiPricingData, authenticationData, codeExamples, endpointsData, OverviewData, tutorialData } from '../data/constants'
import WithSection from './WithSection'

import Overview from './pricing/Overview'
import Authentication from './pricing/Authentication'
import Endpoints from './pricing/Endpoints'
import Tutorial from './pricing/Tutorial'
import CodeExamples from './pricing/CodeExamples'
import ApiPricing from './pricing/ApiPricing'


const Pricing = () => {

  return (
    <div className=" flex flex-col w-full h-fit min-h-dvh bg-background-light dark:bg-background">
      <Header />
      <main className='px-8 py-8 w-full min-h-48 h-fit' id="main_content">

        <WithSection id={"Overview"} data={OverviewData} WrappedComponent={Overview} /> 
        <WithSection id={"Authentication"} data={authenticationData} WrappedComponent={Authentication} />        
        <WithSection id={"Endpoints"} data={endpointsData} WrappedComponent={Endpoints} />
        <WithSection id={"Tutorial"} data={tutorialData} WrappedComponent={Tutorial} />
        <WithSection id={"CodeExamples"} data={codeExamples} WrappedComponent={CodeExamples} /> 
        <WithSection id={"Pricing"} data={apiPricingData} WrappedComponent={ApiPricing} />    
        
      </main>
    </div>
  )
}
export default Pricing

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
