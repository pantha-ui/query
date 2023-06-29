import React from "react";
import { useQuery } from "../hooks/useQuery";

const Sample = () => {
  const query = useQuery();

  console.log(query)

  return <div>Sample</div>;
};

export default Sample;
