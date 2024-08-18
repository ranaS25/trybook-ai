import React from 'react'


const WithSection = ({data, WrappedComponent}) => {

  return (
    <section
      className="border rounded-lg border-white/20 w-full h-fit p-8 mb-8 bg-sectionBackground ">
      
      <WrappedComponent data={ data} />
    </section>
  )
}

export default WithSection