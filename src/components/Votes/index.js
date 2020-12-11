import React, { useState } from "react";

const Votes = ({ vote }) => {
  const [totalCount, setTotalCount] = useState(vote);

  return <>{totalCount}</>;
};
export default Votes;
