import React from "react";
import uuid from "react-uuid";

// material-ui
import { Grid } from "@material-ui/core";

import ArticleCard from "./ArticleCard";

const ArticleCardList = ({ postData, main }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      {postData.map((post) => {
        return <ArticleCard key={uuid()} post={post} main={main}></ArticleCard>;
      })}
    </Grid>
  );
};

export default ArticleCardList;
