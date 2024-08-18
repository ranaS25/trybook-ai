import React from 'react';

import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubheading";
import SectionText from "../ui/SectionText";

const Tutorial = ({ data}) => {

  return (
    <>
      <SectionHeading heading={data.heading} />
      {

        data.tutorial.map((step, index) => {
          return <React.Fragment key={index}>
            <SectionSubHeading heading={"Step" + step.step + ": " +step.title} />
            <SectionText content={step.description} />
          </React.Fragment>
        })
      }     
    </>
    
  )
}


export default Tutorial;