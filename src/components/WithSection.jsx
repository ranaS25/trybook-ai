import React from 'react'


const WithSection = ({data, WrappedComponent}) => {

  return (
    <section
      className="border rounded-lg border-border-light dark:border-border w-full h-fit p-8 mb-8 bg-sectionBackground-light dark:bg-sectionBackground overflow-x-auto">
      
      <WrappedComponent data={ data} />
    </section>
  )
}

export default WithSection