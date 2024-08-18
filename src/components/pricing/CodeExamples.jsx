import Code from "../ui/Code";
import SectionHeading from "../ui/SectionHeading";
import SectionSubHeading from "../ui/SectionSubheading";

const CodeExamples = ({data}) => {
  return <>
    <SectionHeading heading={data.heading} />
    <SectionSubHeading heading={data.python.title} />
    <Code code={data.python.code} />

    <SectionSubHeading heading={data.javascript.title} />
    <Code code={data.javascript.code} />
    </>
}

export default CodeExamples;