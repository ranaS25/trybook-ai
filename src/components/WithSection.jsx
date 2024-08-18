import React from 'react'


const WithSection = ({WrappedComponent}) => {

  return (
    <section
      className="border rounded-lg border-white/20 w-full h-fit p-8 mb-8 bg-slate-800 ">
      
      <WrappedComponent/>
    </section>
  )
}

export default WithSection