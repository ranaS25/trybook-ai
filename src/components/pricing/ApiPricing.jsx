import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubheading";
import SectionText from "../ui/SectionText";
import Table from "../ui/Table";

const ApiPricing = ({ data }) => {

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

export default ApiPricing;