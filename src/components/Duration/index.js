import React from "react";
import moment from "moment";

const Duration = ({ inputDate }) => {
  return (
    <>
      {/*duration*/}
      {moment(inputDate).format("DD/MM/YYYY")}
    </>
  );
};

export default Duration;
