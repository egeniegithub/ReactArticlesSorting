// global
import React, { useState } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Divider } from "@material-ui/core";

import uuid from "react-uuid";

import ArticleCardList from "./ArticleCardList";

import Data from "../Data.json";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: "20px 24px",
  },
}));

const Article = ({}) => {
  const classes = useStyles();

  const [articlesData, setArticlesData] = useState(
    Data.sort(function (a, b) {
      return new Date(b.createdDate) - new Date(a.createdDate);
    })
  );

  const applyFilter = (key) => {
    const data = [...Data];
    if (key === "createdDate") {
      new Date();
      let filterData = data.sort(function (a, b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
      setArticlesData(filterData);
      return;
    }
    let filterData = data.sort(function (a, b) {
      return b[key] - a[key];
    });
    setArticlesData(filterData);
  };
  return (
    <div style={{ width: 1496 }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.page}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2" style={{ textShadow: "2px 2px grey" }}>
            Article's Sorting App
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.page}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          style={{ marginBottom: "1px" }}
        >
          <Button
            variant="contained"
            style={{ marginRight: "11px" }}
            onClick={() => applyFilter("votes")}
          >
            Most Upvoted
          </Button>
          <Button
            variant="contained"
            onClick={() => applyFilter("createdDate")}
          >
            Most Recent
          </Button>
        </Grid>
      </Grid>

      <Divider style={{ marginTop: 15, marginBottom: 15 }} />

      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.page}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          style={{ marginBottom: "1px" }}
        >
          <ArticleCardList key={uuid()} postData={articlesData} main={false} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Article;
