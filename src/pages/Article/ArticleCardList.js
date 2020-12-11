import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

// material-ui
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ArticleCard from "./ArticleCard";

const ArticleCardList = ({ postData, main }) => {
  return (
    <Grid item diplay="block">
      {postData.map((post) => {
        return <ArticleCard key={uuid()} post={post} main={main}></ArticleCard>;
      })}
    </Grid>
  );
};

export default ArticleCardList;
