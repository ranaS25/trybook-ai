import SectionHeading from "../ui/SectionHeading";
import SectionText from "../ui/SectionText";

const Overview = ({ data}) => {

  return (
    <>
      <SectionHeading  heading={data.heading} />
      <SectionText content={data.description} />
    </>
  )
}
export default Overview;

