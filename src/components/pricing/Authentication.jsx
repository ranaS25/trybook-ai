import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import SectionText from "../ui/SectionText";
import Code from "../ui/Code";
import CustomButton from "../ui/Button";
import { API_KEY_URL } from "../../data/constants";

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
      <div className="font-normal  mt-4 p-4 border rounded text-text-light dark:text-text border-border-light  dark:border-border break-words">{ data.apiMessage }<strong>{ userApi}</strong></div>
    </>
  )
}

export default Authentication;