import Code from "../ui/Code";
import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubheading";
import SectionSubHeading2 from "../ui/SectionSubHeading2";
import Table from "../ui/Table";

const Endpoints = ({ data }) => {

  return (
    <>
      <SectionHeading heading={ data.heading} />
      <SectionSubHeading heading={'Generate Book'}/>

      <p className="text-base font-inter font-bold"><span className="rounded py-1 px-2 mr-2 dark:bg-accent text-background">POST</span><span className="rounded py-2 px-4 mb-4  bg-primary text-text">/api/generate-book</span></p>
      <SectionSubHeading2 heading={'Request Body'} />
      
      <Table tableData={data.tableData} />
      <SectionSubHeading2 heading={'Response'} />
      <Code code={data.response} />
      
      </>
  )
}

export default Endpoints;